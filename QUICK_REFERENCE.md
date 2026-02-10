# BFF Quick Reference Guide

## Common Tasks

Swagger UI is available at `/docs` with the raw OpenAPI JSON at `/api/swagger`.

### 1. Display All Products

**File:** `pages/index.tsx` or any component

```typescript
import { useProducts } from "@/lib/hooks";

export function YourComponent() {
  const { products, loading, error } = useProducts();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}
```

### 2. Display Single Product

**File:** `pages/product/[id].tsx`

```typescript
import { useProduct } from "@/lib/hooks";

export function ProductDetail() {
  const { id } = useRouter().query;
  const { product, loading, error } = useProduct(parseInt(id as string));

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Not found</p>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <h3>{product.price}</h3>
    </div>
  );
}
```

### 3. Search Products

```typescript
import { useProducts } from "@/lib/hooks";
import { useState } from "react";

export function SearchProducts() {
  const [query, setQuery] = useState("");
  const { products, refetch } = useProducts();

  const handleSearch = async () => {
    await refetch(query);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {products.map((p) => (
        <div key={p.id}>{p.name}</div>
      ))}
    </div>
  );
}
```

### 4. Filter by Category

```typescript
import { useProducts } from "@/lib/hooks";
import { useState } from "react";

export function CategoryFilter() {
  const [category, setCategory] = useState("bestsellers");
  const { refetch } = useProducts();

  const handleCategoryChange = async (newCategory: string) => {
    setCategory(newCategory);
    await refetch(undefined, newCategory);
  };

  return (
    <div>
      <button onClick={() => handleCategoryChange("bestsellers")}>Best Sellers</button>
      <button onClick={() => handleCategoryChange("seasonal")}>Seasonal</button>
      <button onClick={() => handleCategoryChange("weddings")}>Weddings</button>
    </div>
  );
}
```

### 5. Add New Product

```typescript
import { createProduct } from "@/lib/hooks";
import { useState } from "react";

export function AddProductForm() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    displayPrice: "$$",
    description: "",
    image: "",
    category: "new",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const result = await createProduct(formData);
    if (result.success) {
      alert("Product added!");
      setFormData({
        name: "",
        price: "",
        displayPrice: "$$",
        description: "",
        image: "",
        category: "new",
      });
    } else {
      alert("Error: " + result.error);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product name"
        value={formData.name}
        onChange={(e) =>
          setFormData({ ...formData, name: e.target.value })
        }
        required
      />
      <input
        type="text"
        placeholder="Price"
        value={formData.price}
        onChange={(e) =>
          setFormData({ ...formData, price: e.target.value })
        }
        required
      />
      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
        required
      />
      <input
        type="url"
        placeholder="Image URL"
        value={formData.image}
        onChange={(e) =>
          setFormData({ ...formData, image: e.target.value })
        }
        required
      />
      <select
        value={formData.category}
        onChange={(e) =>
          setFormData({ ...formData, category: e.target.value })
        }
      >
        <option value="new">New</option>
        <option value="bestsellers">Best Sellers</option>
        <option value="seasonal">Seasonal</option>
        <option value="weddings">Weddings</option>
      </select>
      <button type="submit" disabled={loading}>
        {loading ? "Adding..." : "Add Product"}
      </button>
    </form>
  );
}
```

### 6. Update Product

```typescript
import { updateProduct } from "@/lib/hooks";

export function UpdateProductForm({ productId }: { productId: number }) {
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    setLoading(true);
    const result = await updateProduct(productId, { price });
    if (result.success) {
      alert("Product updated!");
    } else {
      alert("Error: " + result.error);
    }
    setLoading(false);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="New price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleUpdate} disabled={loading}>
        {loading ? "Updating..." : "Update"}
      </button>
    </div>
  );
}
```

### 7. Delete Product

```typescript
import { deleteProduct } from "@/lib/hooks";

export function DeleteProductButton({ productId }: { productId: number }) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!confirm("Are you sure?")) return;

    setLoading(true);
    const result = await deleteProduct(productId);
    if (result.success) {
      alert("Product deleted!");
      // Refresh page or update state
    } else {
      alert("Error: " + result.error);
    }
    setLoading(false);
  };

  return (
    <button onClick={handleDelete} disabled={loading}>
      {loading ? "Deleting..." : "Delete"}
    </button>
  );
}
```

## API Response Patterns

All API responses follow this structure:

**Success:**

```json
{
  "success": true,
  "data": {
    /* product or array of products */
  },
  "message": "Optional success message"
}
```

**Error:**

```json
{
  "success": false,
  "error": "Error description"
}
```

## Error Handling

Always handle errors in your components:

```typescript
import { useProducts } from "@/lib/hooks";

export function SafeProductList() {
  const { products, loading, error } = useProducts();

  if (loading) return <div>Loading products...</div>;

  if (error) {
    return <div style={{ color: "red" }}>Error loading products: {error}</div>;
  }

  if (products.length === 0) {
    return <div>No products found</div>;
  }

  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>{p.name} - {p.price}</li>
      ))}
    </ul>
  );
}
```

## Debugging Tips

### 1. Check Browser Console

```javascript
// In browser console:
fetch("/api/products")
  .then((r) => r.json())
  .then((d) => console.log(d));
```

### 2. Check Network Tab

- Go to DevTools → Network
- Filter by "products"
- Check request/response payloads

### 3. Verify JSON Files

- Open `data/catalog.json` in your editor
- Open `data/products.json` in your editor
- Check if data is there

### 4. Check API Routes

- Verify files exist at `pages/api/products/index.ts` and `pages/api/products/[id].ts`
- Restart dev server after adding new API routes

## Performance Tips

1. **Use `useMemo` for filtered products:**

   ```typescript
   const filteredProducts = useMemo(
     () => products.filter((p) => p.category === category),
     [products, category],
   );
   ```

2. **Debounce search requests:**

   ```typescript
   import { useEffect, useState } from "react";

   const [query, setQuery] = useState("");
   useEffect(() => {
     const timer = setTimeout(() => {
       refetch(query);
     }, 500);
     return () => clearTimeout(timer);
   }, [query]);
   ```

3. **Implement pagination:**
   ```typescript
   const itemsPerPage = 10;
   const paginatedProducts = products.slice(
     (currentPage - 1) * itemsPerPage,
     currentPage * itemsPerPage,
   );
   ```

## Migration from Static JSON

If importing static JSON files:

**Old way (before):**

```typescript
import productsData from "@/data/products.json";
export function List() {
  return <div>{productsData.map(...)}</div>;
}
```

**New way (after):**

```typescript
import { useProducts } from "@/lib/hooks";
export function List() {
  const { products, loading } = useProducts();
  if (loading) return <div>Loading...</div>;
  return <div>{products.map(...)}</div>;
}
```

## Next Steps

1. **Replace static imports** with API hooks
2. **Add loading/error states** to all components
3. **Test API** with the ApiTester component
4. **Implement caching** for better performance
5. **Add authentication** if needed for admin operations
6. **Migrate to database** for production

See [API.md](./API.md) for complete API documentation.
