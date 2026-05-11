# Skill: add-translation

Add new i18n translation keys to the KzaVerde locale files.

## Inputs
- Feature or section name (e.g., "checkout", "product-detail")
- Keys and their English values
- Whether a Portuguese (pt-BR) locale file exists

## Current state
- Only `locales/en.json` exists (currently empty `{}`)
- next-intl version 2.10.0 (flat key style, no nesting required)

## Rules
1. Key naming: `<section>.<key>` in camelCase — e.g., `"nav.home"`, `"product.addToCart"`
2. Values should be natural Brazilian Portuguese if writing PT-BR, clear English for EN
3. Placeholders use `{variableName}` syntax — e.g., `"cart.itemCount": "{count} itens no carrinho"`
4. Add keys to ALL locale files to avoid missing translation warnings
5. Sort keys alphabetically within each section prefix

## Steps
1. Read `locales/en.json`
2. Add new keys in the `section.key` format
3. Write back the updated JSON (formatted with 2-space indent)
4. If `locales/pt.json` exists, add the same keys with PT-BR values
5. In the component, use the `useTranslations` hook:

```tsx
import { useTranslations } from "next-intl";

const MyComponent = () => {
  const t = useTranslations();
  return <span>{t("section.key")}</span>;
};
```

## Example en.json shape
```json
{
  "nav.home": "Home",
  "nav.products": "Products",
  "nav.contact": "Contact",
  "product.addToCart": "Add to Cart",
  "product.viewDetails": "View Details",
  "product.careInstructions": "Care Instructions",
  "cart.itemCount": "{count} items in cart",
  "footer.rights": "All rights reserved"
}
```
