# KzaVerde Backend For Frontend (BFF) Setup Guide

## Overview

A lightweight Backend For Frontend (BFF) has been implemented using **Next.js API Routes**. This allows you to manage products via API endpoints and dynamically fetch data on the frontend without importing static JSON files.

Swagger is available for interactive API testing and documentation at:

- `/docs` (Swagger UI)
- `/api/swagger` (OpenAPI JSON)

## Architecture

```
┌─────────────────────────────────────────────────┐
│           Frontend (React Components)            │
├─────────────────────────────────────────────────┤
│         lib/hooks.ts (React Hooks)              │
│  - useProducts()                                │
│  - useProduct(id)                               │
│  - createProduct()                              │
│  - updateProduct()                              │
│  - deleteProduct()                              │
├─────────────────────────────────────────────────┤
│       pages/api/products/* (API Routes)         │
│  - GET  /api/products                           │
│  - POST /api/products                           │
│  - GET  /api/products/[id]                      │
│  - PATCH /api/products/[id]                     │
│  - DELETE /api/products/[id]                    │
├─────────────────────────────────────────────────┤
│        lib/db.ts (Database Layer)               │
│  - File I/O operations                          │
│  - Product CRUD operations                      │
│  - Search and filtering logic                   │
├─────────────────────────────────────────────────┤
│         data/*.json (File Storage)              │
│  - catalog.json (full product details)          │
│  - products.json (simplified product list)      │
└─────────────────────────────────────────────────┘
```

## File Structure

```
kzaverde-app/
├── lib/
│   ├── db.ts                    # Database utilities (CRUD operations)
│   └── hooks.ts                 # React hooks and async functions
├── pages/
│   ├── api/
│   │   └── products/
│   │       ├── index.ts         # GET all, POST new
│   │       └── [id].ts          # GET one, PATCH, DELETE
│   ├── index.tsx                # Homepage (uses useProducts)
│   └── product/
│       └── [id].tsx             # Product detail (uses useProduct)
├── components/
│   ├── home/
│   │   └── FeaturedProductsSection.tsx  # Updated to use API
│   ├── api/
│   │   └── ApiTester.tsx        # Development testing tool
│   └── product-detail/
│       └── *.tsx                # Product components
├── data/
│   ├── catalog.json             # Full product data
│   └── products.json            # Simplified product list
├── types/
│   └── product.ts               # Product interface
└── API.md                        # Complete API documentation
```

## Core Components

### 1. Database Layer (`lib/db.ts`)

Handles all file I/O and product management:

```typescript
// Read/Write JSON files
readDataFile(filename: string)
writeDataFile(filename: string, data: any)

// Product operations
getAllProducts(): Product[]
getProductById(id: number): Product | null
createProduct(productData): Product
updateProduct(id: number, updates): Product | null
deleteProduct(id: number): boolean

// Search & Filter
searchProducts(query: string): Product[]
getProductsByCategory(category: string): Product[]
```

### 2. API Routes

#### `pages/api/products/index.ts`

- **GET** - Fetch all products with optional search/category filtering
- **POST** - Create a new product (returns auto-incremented ID)

#### `pages/api/products/[id].ts`

- **GET** - Fetch a single product by ID
- **PATCH/PUT** - Update a product (partial updates supported)
- **DELETE** - Remove a product

### 3. React Hooks (`lib/hooks.ts`)

**useProducts()**

```typescript
const { products, loading, error, refetch } = useProducts();
```

**useProduct(id)**

```typescript
const { product, loading, error } = useProduct(productId);
```

**Async Functions**

```typescript
const result = await createProduct(productData);
const result = await updateProduct(id, updates);
const result = await deleteProduct(id);
```

## Usage Examples

### Fetch Products on Homepage

```typescript
// components/home/FeaturedProductsSection.tsx
import { useProducts } from "@/lib/hooks";

export const FeaturedProductsSection = () => {
  const { products, loading } = useProducts();

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};
```

### Fetch Single Product

```typescript
// pages/product/[id].tsx
import { useProduct } from "@/lib/hooks";

const ProductDetail = () => {
  const { id } = useRouter().query;
  const { product, loading } = useProduct(parseInt(id as string));

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Not found</div>;

  return <div>{product.name}</div>;
};
```

### Create New Product

```typescript
import { createProduct } from "@/lib/hooks";

const handleAddProduct = async () => {
  const result = await createProduct({
    name: "New Flower",
    price: "$50.00",
    displayPrice: "$$",
    description: "Beautiful arrangement",
    image: "https://...",
    images: ["https://..."],
    category: "seasonal",
  });

  if (result.success) {
    console.log("Product added:", result.data);
  }
};
```

## API Endpoints Reference

All endpoints return standardized JSON responses:

```json
{
  "success": boolean,
  "data": {...},
  "error": "error message if failed",
  "message": "success message if applicable"
}
```

### GET /api/products

```bash
curl http://localhost:3000/api/products
curl "http://localhost:3000/api/products?search=rose"
curl "http://localhost:3000/api/products?category=bestsellers"
```

### POST /api/products

```bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Flower",
    "price": "$50.00",
    "displayPrice": "$$",
    "description": "...",
    "image": "...",
    "category": "new"
  }'
```

### GET /api/products/[id]

```bash
curl http://localhost:3000/api/products/1
```

### PATCH /api/products/[id]

```bash
curl -X PATCH http://localhost:3000/api/products/1 \
  -H "Content-Type: application/json" \
  -d '{"price": "$60.00"}'
```

### DELETE /api/products/[id]

```bash
curl -X DELETE http://localhost:3000/api/products/1
```

## Testing the API

### Development Testing Component

A built-in API tester component is available at `components/api/ApiTester.tsx`:

```typescript
import ApiTester from "@/components/api/ApiTester";

// Add to any page during development
<ApiTester />
```

This provides a UI to:

- View loaded products count
- Create new products with a form
- See real-time API responses
- Test API endpoints without curl

### Manual Testing

1. **Start dev server:**

   ```bash
   npm run dev
   ```

2. **Open browser:**

   ```
   http://localhost:3000
   ```

3. **Test in browser console:**

   ```javascript
   // Fetch all products
   fetch("/api/products")
     .then((r) => r.json())
     .then(console.log);

   // Fetch single product
   fetch("/api/products/1")
     .then((r) => r.json())
     .then(console.log);

   // Create product
   fetch("/api/products", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify({
       name: "Test",
       price: "$50",
       displayPrice: "$$",
       description: "Test product",
       image: "https://...",
       category: "test",
     }),
   })
     .then((r) => r.json())
     .then(console.log);
   ```

## Data Synchronization

Products are stored in two JSON files that are automatically kept in sync:

- **`data/catalog.json`** - Full product details (used by product detail pages)
- **`data/products.json`** - Simplified product list (used by product cards)

When you create/update/delete a product via the API, both files are updated automatically.

## Important Notes

⚠️ **For Production:**

- This setup uses file-based storage (JSON files)
- For production, migrate to a proper database (MongoDB, PostgreSQL, etc.)
- File operations are synchronous and can block the event loop
- Consider adding caching for better performance

✅ **Best Practices:**

- Use the `useProducts()` hook for list pages
- Use the `useProduct(id)` hook for detail pages
- Always handle loading and error states
- Use TypeScript for type safety
- Add validation on the API layer

## Troubleshooting

**Problem:** "Module not found" error

- Ensure all files are created in correct paths
- Check file paths in imports (use absolute paths with @/)

**Problem:** Products not appearing

- Check browser console for API errors
- Verify JSON files exist in `data/` directory
- Ensure API route file names match exactly

**Problem:** Changes not reflected

- Rebuild project: `npm run build`
- Restart dev server: `npm run dev`
- Check that both JSON files are being updated

## See Also

- [API.md](./API.md) - Complete API documentation with examples
- [lib/db.ts](./lib/db.ts) - Database operations
- [lib/hooks.ts](./lib/hooks.ts) - React hooks
- [pages/api/products/](./pages/api/products/) - API route handlers
