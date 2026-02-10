import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");

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

// Read JSON file
export function readDataFile(filename: string): any {
  try {
    const filePath = path.join(DATA_DIR, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileContents);
  } catch (error) {
    console.error(`Error reading ${filename}:`, error);
    return null;
  }
}

// Write JSON file
export function writeDataFile(filename: string, data: any): boolean {
  try {
    const filePath = path.join(DATA_DIR, filename);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
    return true;
  } catch (error) {
    console.error(`Error writing ${filename}:`, error);
    return false;
  }
}

// Get all products from catalog.json
export function getAllProducts(): Product[] {
  const catalogData = readDataFile("catalog.json");
  return catalogData?.catalog || [];
}

// Get product by ID
export function getProductById(id: number): Product | null {
  const products = getAllProducts();
  return products.find((p) => p.id === id) || null;
}

// Create new product (with auto-incremented ID)
export function createProduct(productData: Omit<Product, "id">): Product {
  const products = getAllProducts();
  const nextId =
    products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1;
  const newProduct = { id: nextId, ...productData };

  const catalogData = readDataFile("catalog.json");
  catalogData.catalog.push(newProduct);
  writeDataFile("catalog.json", catalogData);

  // Also update products.json (simple version)
  const productsData = readDataFile("products.json");
  const simpleProduct = {
    id: newProduct.id,
    name: newProduct.name,
    price: newProduct.price,
    image: newProduct.image,
    alt: newProduct.name,
  };
  productsData.push(simpleProduct);
  writeDataFile("products.json", productsData);

  return newProduct;
}

// Update product
export function updateProduct(
  id: number,
  updates: Partial<Product>,
): Product | null {
  const products = getAllProducts();
  const productIndex = products.findIndex((p) => p.id === id);

  if (productIndex === -1) return null;

  const updatedProduct = { ...products[productIndex], ...updates, id };
  products[productIndex] = updatedProduct;

  const catalogData = readDataFile("catalog.json");
  catalogData.catalog = products;
  writeDataFile("catalog.json", catalogData);

  return updatedProduct;
}

// Delete product
export function deleteProduct(id: number): boolean {
  const products = getAllProducts();
  const filteredProducts = products.filter((p) => p.id !== id);

  if (filteredProducts.length === products.length) return false; // Product not found

  const catalogData = readDataFile("catalog.json");
  catalogData.catalog = filteredProducts;
  writeDataFile("catalog.json", catalogData);

  // Also remove from products.json
  const productsData = readDataFile("products.json");
  const updatedProductsData = productsData.filter((p: any) => p.id !== id);
  writeDataFile("products.json", updatedProductsData);

  return true;
}

// Search products by name or category
export function searchProducts(query: string): Product[] {
  const products = getAllProducts();
  const lowerQuery = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.category.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery),
  );
}

// Get products by category
export function getProductsByCategory(category: string): Product[] {
  const products = getAllProducts();
  return products.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase(),
  );
}
