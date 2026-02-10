import type { NextApiRequest, NextApiResponse } from "next";
import { getProductById, updateProduct, deleteProduct } from "../../../lib/db";

type ResponseData = any;

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Get a product by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Product
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: "#/components/schemas/Product"
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: Product not found
 *       500:
 *         description: Server error
 *   patch:
 *     summary: Update a product by ID
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
 *             $ref: "#/components/schemas/ProductUpdate"
 *     responses:
 *       200:
 *         description: Updated product
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: "#/components/schemas/Product"
 *                 message:
 *                   type: string
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: Product not found
 *       500:
 *         description: Server error
 *   put:
 *     summary: Replace a product by ID
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
 *             $ref: "#/components/schemas/ProductUpdate"
 *     responses:
 *       200:
 *         description: Updated product
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: Product not found
 *       500:
 *         description: Server error
 *   delete:
 *     summary: Delete a product by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: Product not found
 *       500:
 *         description: Server error
 */

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  const { id } = req.query;
  const productId = parseInt(id as string);

  if (isNaN(productId)) {
    return res.status(400).json({
      success: false,
      error: "Invalid product ID",
    });
  }

  if (req.method === "GET") {
    try {
      const product = getProductById(productId);

      if (!product) {
        return res.status(404).json({
          success: false,
          error: "Product not found",
        });
      }

      res.status(200).json({
        success: true,
        data: product,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: "Failed to fetch product",
      });
    }
  } else if (req.method === "PUT" || req.method === "PATCH") {
    try {
      const product = getProductById(productId);

      if (!product) {
        return res.status(404).json({
          success: false,
          error: "Product not found",
        });
      }

      const updatedProduct = updateProduct(productId, req.body);

      res.status(200).json({
        success: true,
        data: updatedProduct,
        message: "Product updated successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: "Failed to update product",
      });
    }
  } else if (req.method === "DELETE") {
    try {
      const product = getProductById(productId);

      if (!product) {
        return res.status(404).json({
          success: false,
          error: "Product not found",
        });
      }

      const deleted = deleteProduct(productId);

      if (!deleted) {
        return res.status(500).json({
          success: false,
          error: "Failed to delete product",
        });
      }

      res.status(200).json({
        success: true,
        message: "Product deleted successfully",
        data: { id: productId },
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: "Failed to delete product",
      });
    }
  } else {
    res.status(405).json({
      success: false,
      error: "Method not allowed",
    });
  }
}
