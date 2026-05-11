Add a new product to the KzaVerde catalog.

**Arguments:** $ARGUMENTS
(Provide: name, price, category, description, image path. Optional: care instructions, rating, reviews)

## What to do

1. Read `data/catalog_updated_07_05_2026.json`
2. Find the current max `id` in `catalog[]`
3. Build the new product object:

```json
{
  "id": <maxId + 1>,
  "name": "<provided name>",
  "price": "<provided price>",
  "displayPrice": "<$ | $$ | $$$>",
  "description": "<provided description>",
  "image": "<provided image path>",
  "images": ["<provided image path>"],
  "category": "<provided category>",
  "rating": 0,
  "reviews": 0,
  "careInstructions": [
    "Mantenha em local fresco e arejado.",
    "Troque a água a cada dois dias.",
    "Corte os cabinhos em diagonal antes de colocar no vaso."
  ]
}
```

4. Determine `displayPrice`:
   - Price under R$50 → `"$"`
   - R$50–R$150 → `"$$"`
   - Over R$150 → `"$$$"`

5. Append to `catalog[]` and write back with `JSON.stringify(data, null, 2)`

6. After saving, confirm: "Product '<name>' added with id <id>. Catalog now has <count> products."

## Existing categories (check catalog file for current slugs)
- `bestsellers`
- `ocasioes-especiais`
- `arranjos`
- `buques`

## Important
- Do NOT change any existing product entries
- Preserve the exact JSON structure and field order
- If an image path is provided but the file doesn't exist under `public/`, note it as a warning but still add the product
