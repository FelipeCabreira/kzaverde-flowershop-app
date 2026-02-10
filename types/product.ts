/**
 * Product type definitions
 */

export interface Product {
  id: number;
  name: string;
  price: string;
  displayPrice?: string;
  description: string;
  image: string;
  images?: string[];
  category: string;
  rating?: number;
  reviews?: number;
  careInstructions?: string[];
  // size?: string; // Commented for now
  // type?: string; // Commented for now
}

export interface CatalogData {
  catalog: Product[];
}

/**
 * Order Details for WhatsApp integration
 */
export interface OrderDetails {
  productId: number;
  productName: string;
  quantity: number;
  orderDetails: string;
  shippingAddress?: string;
  timestamp: string;
}

/**
 * WhatsApp Order Parameters
 */
export interface WhatsAppOrderParams {
  phone: string;
  productName: string;
  quantity: number;
  orderDetails: string;
  shippingAddress?: string;
}
