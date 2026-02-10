import type { NextApiRequest, NextApiResponse } from "next";
import { OrderDetails } from "@/types/product";

type ResponseData = {
  success: boolean;
  order?: OrderDetails;
  message: string;
};

/**
 * @swagger
 * components:
 *   schemas:
 *     OrderDetails:
 *       type: object
 *       required:
 *         - productId
 *         - productName
 *         - quantity
 *         - orderDetails
 *       properties:
 *         productId:
 *           type: integer
 *           example: 1
 *         productName:
 *           type: string
 *           example: "Eternal Blush"
 *         quantity:
 *           type: integer
 *           example: 2
 *         orderDetails:
 *           type: string
 *           example: "Red roses preferred, delivery on Friday"
 *         timestamp:
 *           type: string
 *           format: date-time
 *           example: "2026-02-10T21:30:00.000Z"
 */

/**
 * @swagger
 * /api/orders/create:
 *   post:
 *     summary: Create a new order
 *     description: Creates a new order with product and customer details for WhatsApp integration
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/OrderDetails"
 *     responses:
 *       201:
 *         description: Order created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 order:
 *                   $ref: "#/components/schemas/OrderDetails"
 *                 message:
 *                   type: string
 *                   example: "Order created successfully"
 *       400:
 *         description: Missing required fields
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Missing required fields"
 *       405:
 *         description: Method not allowed
 *       500:
 *         description: Internal server error
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const orderData: OrderDetails = req.body;

    // Validate required fields
    if (
      !orderData.productId ||
      !orderData.productName ||
      orderData.quantity === undefined ||
      orderData.quantity === null
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Missing required fields: productId, productName, and quantity are required",
      });
    }

    // Validate quantity is positive
    if (orderData.quantity <= 0) {
      return res.status(400).json({
        success: false,
        message: "Quantity must be greater than 0",
      });
    }

    // Add timestamp if not provided
    const finalOrderData: OrderDetails = {
      ...orderData,
      orderDetails: orderData.orderDetails || "",
      timestamp: orderData.timestamp || new Date().toISOString(),
    };

    // TODO: Here you would typically save to database
    // For now, just return success with the order data
    // Example:
    // await db.orders.create(finalOrderData);

    res.status(201).json({
      success: true,
      order: finalOrderData,
      message: "Order created successfully",
    });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}
