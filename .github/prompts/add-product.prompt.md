---
mode: agent
tools:
  - codebase
  - editFiles
description: Add a new product to the KzaVerde catalog JSON file
---

Add a new product to the KzaVerde catalog.

Ask me (or use context) for:
- Product name (Portuguese preferred, e.g., "Buquê das Violetas")
- Price (e.g., "R$ 120,00")
- Category slug
- Description (2-3 sentences, warm PT-BR tone)
- Image path under `public/catalog/`
- (Optional) care instructions, rating, reviews count

Steps:
1. Read `data/catalog_updated_07_05_2026.json`
2. Find the max `id` in `catalog[]`
3. Build and append the new product object:

```json
{
  "id": <maxId + 1>,
  "name": "...",
  "price": "R$ XX,00",
  "displayPrice": "<$ | $$ | $$$>",
  "description": "...",
  "image": "/catalog/<folder>/<file>.png",
  "images": ["/catalog/<folder>/<file>.png"],
  "category": "<slug>",
  "rating": 0,
  "reviews": 0,
  "careInstructions": [
    "Mantenha em local fresco e arejado.",
    "Troque a água a cada dois dias.",
    "Corte os cabinhos em diagonal antes de colocar no vaso."
  ]
}
```

4. `displayPrice` logic: under R$50 → `"$"`, R$50–R$150 → `"$$"`, over R$150 → `"$$$"`
5. Write back with `JSON.stringify(data, null, 2)`

Existing categories: `bestsellers`, `ocasioes-especiais`, `arranjos`, `buques`

After saving: confirm the product name, new id, and total catalog count.
