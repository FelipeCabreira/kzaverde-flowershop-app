# Skill: add-product

Add a new product entry to the KzaVerde catalog.

## Inputs
- Product name (Portuguese, e.g., "Buquê das Violetas")
- Price string (e.g., "R$ 120,00")
- Category (see existing categories below)
- Description (2-3 sentences, PT-BR tone)
- Image path (relative to `public/`, e.g., `/catalog/bouquets/name.png`)
- Optional: additional images, care instructions, rating, reviews

## Existing categories
- `bestsellers`
- `ocasioes-especiais`
- `arranjos`
- `buques`

Check `data/catalog_updated_07_05_2026.json` for currently used category slugs.

## Steps
1. Read `data/catalog_updated_07_05_2026.json` to find the current max `id`
2. Add the new product object to the `catalog` array with `id = maxId + 1`
3. Set `displayPrice` based on price range:
   - Under R$50 → `"$"`
   - R$50–R$150 → `"$$"`
   - Over R$150 → `"$$$"`
4. Default `rating: 0`, `reviews: 0` unless provided
5. `images` array should at minimum contain the primary `image`
6. Write the updated JSON back — preserve formatting (`JSON.stringify(data, null, 2)`)
7. Confirm the product is visible by checking the catalog count

## Product object shape
```json
{
  "id": <next_id>,
  "name": "...",
  "price": "R$ XX,00",
  "displayPrice": "$$",
  "description": "...",
  "image": "/catalog/<folder>/<file>.png",
  "images": ["/catalog/<folder>/<file>.png"],
  "category": "<category-slug>",
  "rating": 0,
  "reviews": 0,
  "careInstructions": [
    "Mantenha em local fresco e arejado.",
    "Troque a água a cada dois dias.",
    "Corte os cabinhos em diagonal antes de colocar no vaso."
  ]
}
```

## Care instruction templates (PT-BR)
- "Mantenha em local fresco e arejado."
- "Troque a água a cada dois dias."
- "Corte os cabinhos em diagonal antes de colocar no vaso."
- "Evite exposição direta ao sol."
- "Retire as folhas que ficam abaixo da linha da água."
