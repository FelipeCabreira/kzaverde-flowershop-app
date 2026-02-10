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
}

export interface CatalogData {
  catalog: Product[];
}
