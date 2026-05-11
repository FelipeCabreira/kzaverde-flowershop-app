Add i18n translation keys to the KzaVerde locale files.

**Arguments:** $ARGUMENTS
(Provide: section/feature name and the key-value pairs to add)

## What to do

1. Read `locales/en.json`
2. Add new keys using the `section.key` naming pattern:
   - e.g., `"nav.home"`, `"product.addToCart"`, `"checkout.total"`
3. Keys must be in camelCase after the dot
4. Sort new keys alphabetically within their section prefix
5. Write back with 2-space indent
6. If `locales/pt.json` exists, add the same keys with PT-BR values

## Key naming conventions
```
nav.*          Navigation items
product.*      Product detail page labels
home.*         Homepage section copy
footer.*       Footer links and copy
cart.*         Cart / order labels
form.*         Form field labels and validation messages
error.*        Error messages
```

## Placeholder syntax
Use `{variableName}` for dynamic values:
```json
"cart.itemCount": "{count} itens no carrinho"
```

## How to use in a component
```tsx
import { useTranslations } from "next-intl";

const MyComponent = () => {
  const t = useTranslations();
  return (
    <div>
      <h1>{t("section.key")}</h1>
      <p>{t("cart.itemCount", { count: 3 })}</p>
    </div>
  );
};
```

## After writing
Confirm: "Added <N> keys to locales/en.json under section '<section>'."
List the keys added for review.
