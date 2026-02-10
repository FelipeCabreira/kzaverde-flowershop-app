import type { NextApiRequest, NextApiResponse } from "next";
import {
  getAllProducts,
  searchProducts,
  getProductsByCategory,
  createProduct,
} from "../../../lib/db";
import {
  requireAuth,
  logSecurityEvent,
  getClientIp,
  extractApiKey,
} from "../../../lib/auth";

type ResponseData = any;

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - price
 *         - description
 *         - image
 *         - category
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: "Eternal Blush"
 *         price:
 *           type: string
 *           example: "$89.99"
 *         displayPrice:
 *           type: string
 *           example: "$$"
 *         description:
 *           type: string
 *           example: "A timeless floral arrangement"
 *         image:
 *           type: string
 *           example: "https://images.example.com/flower.jpg"
 *         images:
 *           type: array
 *           items:
 *             type: string
 *         category:
 *           type: string
 *           example: "bestsellers"
 *         rating:
 *           type: number
 *           example: 4.7
 *         reviews:
 *           type: integer
 *           example: 127
 *         careInstructions:
 *           type: array
 *           items:
 *             type: string
 *     ProductCreate:
 *       type: object
 *       required:
 *         - name
 *         - price
 *         - description
 *         - image
 *         - category
 *       properties:
 *         name:
 *           type: string
 *         price:
 *           type: string
 *         displayPrice:
 *           type: string
 *         description:
 *           type: string
 *         image:
 *           type: string
 *         images:
 *           type: array
 *           items:
 *             type: string
 *         category:
 *           type: string
 *         rating:
 *           type: number
 *         reviews:
 *           type: integer
 *         careInstructions:
 *           type: array
 *           items:
 *             type: string
 *     ProductUpdate:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         price:
 *           type: string
 *         displayPrice:
 *           type: string
 *         description:
 *           type: string
 *         image:
 *           type: string
 *         images:
 *           type: array
 *           items:
 *             type: string
 *         category:
 *           type: string
 *         rating:
 *           type: number
 *         reviews:
 *           type: integer
 *         careInstructions:
 *           type: array
 *           items:
 *             type: string
 *
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get all products
 *     description: Fetch all products with optional search or category filters.
 *     parameters:
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search by name, category, or description
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Filter by category
 *     responses:
 *       200:
 *         description: Product list
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Product"
 *                 count:
 *                   type: integer
 *       500:
 *         description: Server error
 *   post:
 *     summary: Create a product
 *     description: Create a new product and return it.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/ProductCreate"
 *     responses:
 *       201:
 *         description: Product created
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
 *         description: Validation error
 *       500:
 *         description: Server error
 */

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  if (req.method === "GET") {
    try {
      const { search, category } = req.query;

      let products;

      if (search && typeof search === "string") {
        products = searchProducts(search);
      } else if (category && typeof category === "string") {
        products = getProductsByCategory(category);
      } else {
        products = getAllProducts();
      }

      res.status(200).json({
        success: true,
        data: products,
        count: products.length,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: "Failed to fetch products",
      });
    }
  } else if (req.method === "POST") {
    // Require authentication for write operations
    if (!requireAuth(req)) {
      const ip = getClientIp(req);
      logSecurityEvent({
        type: "UNAUTHORIZED_API_ACCESS",
        method: "POST",
        endpoint: "/api/products",
        ip: ip,
        status: 401,
        message: "Unauthorized POST attempt",
      });
      return res.status(401).json({
        success: false,
        error: "Unauthorized. Provide valid x-api-key header.",
      });
    }

    try {
      const {
        name,
        price,
        displayPrice,
        description,
        image,
        images,
        category,
        rating,
        reviews,
        careInstructions,
      } = req.body;

      // Validation
      if (!name || !price || !description || !image || !category) {
        return res.status(400).json({
          success: false,
          error:
            "Missing required fields: name, price, description, image, category",
        });
      }

      const newProduct = createProduct({
        name,
        price,
        displayPrice: displayPrice || "$$",
        description,
        image,
        images: images || [image],
        category,
        rating: rating || 0,
        reviews: reviews || 0,
        careInstructions: careInstructions || [],
      });

      res.status(201).json({
        success: true,
        data: newProduct,
        message: "Product created successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: "Failed to create product",
      });
    }
  } else {
    res.status(405).json({
      success: false,
      error: "Method not allowed",
    });
  }
}
