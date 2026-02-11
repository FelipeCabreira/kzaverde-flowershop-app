import { useEffect, useState } from "react";

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

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

interface UseProductsOptions {
  initialProducts?: Product[];
  enabled?: boolean;
}

export function useProducts(options: UseProductsOptions = {}) {
  const { initialProducts = [], enabled = true } = options;
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [loading, setLoading] = useState(
    enabled && initialProducts.length === 0,
  );
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async (query?: string, category?: string) => {
    setLoading(true);
    setError(null);
    try {
      let url = "/api/products";
      const params = new URLSearchParams();
      if (query) params.append("search", query);
      if (category) params.append("category", category);
      if (params.toString()) url += `?${params.toString()}`;

      const response = await fetch(url);
      const result: ApiResponse<Product[]> = await response.json();

      if (!result.success) {
        throw new Error(result.error || "Failed to fetch products");
      }

      setProducts(result.data || []);
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "Unknown error";
      setError(errorMsg);
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!enabled || initialProducts.length > 0) return;
    fetchProducts();
  }, [enabled, initialProducts.length]);

  return { products, loading, error, refetch: fetchProducts };
}

export function useProduct(id: number) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/products/${id}`);
        const result: ApiResponse<Product> = await response.json();

        if (!result.success) {
          throw new Error(result.error || "Failed to fetch product");
        }

        setProduct(result.data || null);
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : "Unknown error";
        setError(errorMsg);
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return { product, loading, error };
}

export async function createProduct(productData: Omit<Product, "id">) {
  try {
    const response = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    });
    const result: ApiResponse<Product> = await response.json();

    if (!result.success) {
      throw new Error(result.error || "Failed to create product");
    }

    return { success: true, data: result.data };
  } catch (err) {
    const errorMsg = err instanceof Error ? err.message : "Unknown error";
    return { success: false, error: errorMsg };
  }
}

export async function updateProduct(id: number, updates: Partial<Product>) {
  try {
    const response = await fetch(`/api/products/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    });
    const result: ApiResponse<Product> = await response.json();

    if (!result.success) {
      throw new Error(result.error || "Failed to update product");
    }

    return { success: true, data: result.data };
  } catch (err) {
    const errorMsg = err instanceof Error ? err.message : "Unknown error";
    return { success: false, error: errorMsg };
  }
}

export async function deleteProduct(id: number) {
  try {
    const response = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });
    const result: ApiResponse<any> = await response.json();

    if (!result.success) {
      throw new Error(result.error || "Failed to delete product");
    }

    return { success: true };
  } catch (err) {
    const errorMsg = err instanceof Error ? err.message : "Unknown error";
    return { success: false, error: errorMsg };
  }
}
