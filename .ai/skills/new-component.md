# Skill: new-component

Create a new React functional component for the KzaVerde project.

## Inputs
- Component name (PascalCase)
- Props it receives
- Where it lives: `components/` subdirectory (e.g., `home/`, `product-detail/`, or root)
- Purpose / what it renders

## Rules
1. File path: `components/<subfolder>/<ComponentName>.tsx`
2. Use `FC<Props>` with a named `interface <Name>Props`
3. Scoped CSS via `<style jsx>{...}</style>` inside the JSX — no separate `.scss`
4. BEM class names: `.component-name__element--modifier`
5. No default prop values via `defaultProps` — use destructuring defaults instead
6. No inline styles unless dynamically computed
7. Export as default
8. Import order: React → external libs → internal components → types

## Template
```tsx
import React, { FC } from "react";

interface <Name>Props {
  // props here
}

const <Name>: FC<<Name>Props> = ({ /* destructured props */ }) => {
  return (
    <div className="<kebab-name>">
      {/* content */}
      <style jsx>{`
        .<kebab-name> {
          /* styles */
        }
      `}</style>
    </div>
  );
};

export default <Name>;
```

## Real example: components/ProductCard.tsx
```tsx
import React, { FC } from "react";

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  image: string;
  alt: string;
}

const ProductCard: FC<ProductCardProps> = ({ id, name, price, image, alt }) => {
  return (
    <div className="product-card">
      <a href={`/product/${id}`} className="product-card__link">
        <img alt={alt} src={image} className="product-card__img" />
      </a>
      <div className="product-card__info">
        <h3 className="section-content">{name}</h3>
        <span className="product-card__price">{price}</span>
        <a href={`/product/${id}`}>
          <div className="btn btn-sm btn-primary">
            <span>Veja detalhes</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
```
