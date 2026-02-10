import type { NextApiRequest, NextApiResponse } from "next";
import { getProductById, updateProduct } from "../../../../lib/db";

type ResponseData = {
  success: boolean;
  data?: any;
  error?: string;
};

/**
 * @swagger
 * /api/products/{id}/rating:
 *   post:
 *     summary: Add a rating to a product
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - rating
 *             properties:
 *               rating:
 *                 type: integer
 *                 example: 5
 *     responses:
 *       200:
 *         description: Rating saved
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Product not found
 *       500:
 *         description: Server error
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      error: "Method not allowed",
    });
  }

  const { id } = req.query;
  const productId = parseInt(id as string);

  if (isNaN(productId)) {
    return res.status(400).json({
      success: false,
      error: "Invalid product ID",
    });
  }

  const { rating } = req.body as { rating?: number };

  if (!rating || rating < 1 || rating > 5) {
    return res.status(400).json({
      success: false,
      error: "Rating must be between 1 and 5",
    });
  }

  try {
    const product = getProductById(productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        error: "Product not found",
      });
    }

    const currentReviews = product.reviews ?? 0;
    const currentRating = product.rating ?? 0;
    const nextReviews = currentReviews + 1;
    const nextRatingRaw =
      (currentRating * currentReviews + rating) / nextReviews;
    const nextRating = Math.round(nextRatingRaw * 10) / 10;

    const updatedProduct = updateProduct(productId, {
      rating: nextRating,
      reviews: nextReviews,
    });

    return res.status(200).json({
      success: true,
      data: updatedProduct,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Failed to save rating",
    });
  }
}
