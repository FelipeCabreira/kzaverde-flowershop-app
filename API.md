# KzaVerde Backend For Frontend (BFF) API

This document describes the API endpoints available for managing products in the KzaVerde application.

## Base URL

All API endpoints are available at `/api/`

## Swagger UI

Interactive API documentation is available at:

- `/docs` (Swagger UI)
- `/api/swagger` (OpenAPI JSON)

## Endpoints

### Get All Products

**GET** `/api/products`

Fetch all products with optional filtering.

**Query Parameters:**

- `search` (optional): Search products by name, category, or description
- `category` (optional): Filter products by category

**Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Eternal Blush",
      "price": "$89.99",
      "displayPrice": "$$",
      "description": "...",
      "image": "...",
      "images": ["..."],
      "category": "bestsellers",
      "rating": 4.0,
      "reviews": 127,
      "careInstructions": ["..."]
    }
  ],
  "count": 10
}
```

**Examples:**

```bash
# Get all products
curl http://localhost:3000/api/products

# Search products
curl "http://localhost:3000/api/products?search=rose"

# Filter by category
curl "http://localhost:3000/api/products?category=bestsellers"
```

---

### Get Single Product

**GET** `/api/products/[id]`

Fetch a specific product by ID.

**Path Parameters:**

- `id` (required): Product ID

**Response:**

```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Eternal Blush",
    "price": "$89.99",
    "displayPrice": "$$",
    "description": "...",
    "image": "...",
    "images": ["..."],
    "category": "bestsellers",
    "rating": 4.0,
    "reviews": 127,
    "careInstructions": ["..."]
  }
}
```

**Example:**

```bash
curl http://localhost:3000/api/products/1
```

---

### Create Product

**POST** `/api/products`

Create a new product.

**Request Body:**

```json
{
  "name": "Sunset Dreams",
  "price": "$99.99",
  "displayPrice": "$$",
  "description": "A beautiful arrangement with warm autumn tones",
  "image": "https://images.example.com/flower.jpg",
  "images": ["https://images.example.com/flower1.jpg"],
  "category": "seasonal",
  "rating": 5,
  "reviews": 0,
  "careInstructions": ["Keep in cool place", "Change water daily"]
}
```

**Response:**

```json
{
  "success": true,
  "data": {
    "id": 11,
    "name": "Sunset Dreams",
    "price": "$99.99",
    ...
  },
  "message": "Product created successfully"
}
```

**Example:**

```bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Sunset Dreams",
    "price": "$99.99",
    "displayPrice": "$$",
    "description": "A beautiful arrangement with warm autumn tones",
    "image": "https://images.example.com/flower.jpg",
    "images": ["https://images.example.com/flower1.jpg"],
    "category": "seasonal",
    "rating": 5,
    "reviews": 0,
    "careInstructions": ["Keep in cool place", "Change water daily"]
  }'
```

---

### Update Product

**PUT/PATCH** `/api/products/[id]`

Update an existing product.

**Path Parameters:**

- `id` (required): Product ID

**Request Body:**
Any product fields to update (partial update is supported)

```json
{
  "price": "$109.99",
  "rating": 4.8
}
```

**Response:**

```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Eternal Blush",
    "price": "$109.99",
    ...
  },
  "message": "Product updated successfully"
}
```

**Example:**

```bash
curl -X PATCH http://localhost:3000/api/products/1 \
  -H "Content-Type: application/json" \
  -d '{
    "price": "$109.99",
    "rating": 4.8
  }'
```

---

### Delete Product

**DELETE** `/api/products/[id]`

Delete a product.

**Path Parameters:**

- `id` (required): Product ID

**Response:**

```json
{
  "success": true,
  "message": "Product deleted successfully",
  "data": {
    "id": 1
  }
}
```

**Example:**

```bash
curl -X DELETE http://localhost:3000/api/products/1
```

---

## Client-Side Hooks

### useProducts()

Hook to fetch all products from the API.

```typescript
import { useProducts } from '@/lib/hooks';

export function MyComponent() {
  const { products, loading, error, refetch } = useProducts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}
```

### useProduct(id)

Hook to fetch a single product by ID.

```typescript
import { useProduct } from '@/lib/hooks';

export function ProductDetail({ id }) {
  const { product, loading, error } = useProduct(id);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <h1>{product?.name}</h1>;
}
```

---

## Utility Functions

### createProduct()

Create a new product programmatically.

```typescript
import { createProduct } from "@/lib/hooks";

const result = await createProduct({
  name: "New Flower",
  price: "$50.00",
  displayPrice: "$$",
  description: "A new product",
  image: "https://...",
  images: ["https://..."],
  category: "new",
});

if (result.success) {
  console.log("Product created:", result.data);
} else {
  console.error("Error:", result.error);
}
```

### updateProduct(id, updates)

Update a product by ID.

```typescript
import { updateProduct } from "@/lib/hooks";

const result = await updateProduct(1, {
  price: "$75.00",
  rating: 4.5,
});

if (result.success) {
  console.log("Product updated:", result.data);
}
```

### deleteProduct(id)

Delete a product by ID.

```typescript
import { deleteProduct } from "@/lib/hooks";

const result = await deleteProduct(1);

if (result.success) {
  console.log("Product deleted");
}
```

---

## Error Handling

All API responses follow this pattern:

**Success Response:**

```json
{
  "success": true,
  "data": { ... },
  "message": "Optional success message"
}
```

**Error Response:**

```json
{
  "success": false,
  "error": "Error description"
}
```

Common HTTP Status Codes:

- `200` OK - Request successful
- `201` Created - Resource created
- `400` Bad Request - Missing or invalid parameters
- `404` Not Found - Resource not found
- `405` Method Not Allowed - Wrong HTTP method
- `500` Internal Server Error - Server error

---

## Data Structure

### Product

```typescript
interface Product {
  id: number;
  name: string;
  price: string; // e.g., "$89.99"
  displayPrice?: string; // e.g., "$$"
  description: string;
  image: string; // Main image URL
  images?: string[]; // Array of image URLs for gallery
  category: string; // e.g., "bestsellers", "seasonal", "weddings"
  rating?: number; // 0-5 rating
  reviews?: number; // Number of reviews
  careInstructions?: string[]; // Array of care tips
}
```

---

## JSON File Storage

Products are stored in two JSON files:

- **`data/catalog.json`** - Full product details for the product detail page
- **`data/products.json`** - Simplified product data for product cards/listings

Both files are automatically kept in sync by the API.

---

## Notes

- The API uses file system storage with JSON files. For production, consider using a proper database.
- All operations are synchronous and block the event loop. For large datasets, consider implementing caching.
- The API paths are `lib/db.ts` for database operations and `pages/api/` for route handlers.
