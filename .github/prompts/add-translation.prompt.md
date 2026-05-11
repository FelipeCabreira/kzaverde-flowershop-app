---
mode: agent
tools:
  - codebase
  - editFiles
description: Add i18n translation keys to KzaVerde locale files
---

Add i18n translation keys to the KzaVerde locale files.

Ask me (or use context) for:
- Section/feature name (e.g., "checkout", "product-detail")
- Key-value pairs to add

Steps:
1. Read `locales/en.json`
2. Add keys using `section.key` dot-notation format:

```json
{
  "nav.home": "Home",
  "product.addToCart": "Add to Cart",
  "cart.itemCount": "{count} items in cart"
}
```

3. Sort new keys alphabetically within their section prefix
4. Write back with 2-space indent
5. If `locales/pt.json` exists, add matching PT-BR translations

## Naming sections
```
nav.*       Navigation labels
product.*   Product detail page
home.*      Homepage copy
footer.*    Footer links and text
cart.*      Cart / order labels
form.*      Form fields and validation
error.*     Error messages
```

## Dynamic values (placeholders)
Use `{variableName}` syntax: `"cart.itemCount": "{count} itens no carrinho"`

## Usage in components
```tsx
import { useTranslations } from "next-intl";
const t = useTranslations();
// t("section.key")
// t("cart.itemCount", { count: 3 })
```

After writing: list all added keys and confirm the locale file was updated.
