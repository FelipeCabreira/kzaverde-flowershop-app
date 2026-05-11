Create a new React functional component for the KzaVerde project.

**Arguments:** $ARGUMENTS
(Provide: component name, props, subfolder under components/, and purpose)

## What to do

1. Determine the file path: `components/<subfolder>/<ComponentName>.tsx`
   - Use `home/` for homepage sections, `product-detail/` for product pages, root `components/` for shared
2. Create the file using this pattern:

```tsx
import React, { FC } from "react";

interface <Name>Props {
  // typed props
}

const <Name>: FC<<Name>Props> = ({ /* props */ }) => {
  return (
    <div className="<kebab-name>">
      {/* content */}
      <style jsx>{`
        .<kebab-name> {
          /* scoped styles */
        }
      `}</style>
    </div>
  );
};

export default <Name>;
```

## Rules
- `FC<Props>` with a named interface — no `React.FC` shorthand
- CSS lives inside `<style jsx>` — no separate `.scss` files
- BEM class names: `.component-name__element--modifier`
- Default values via destructuring (`{ count = 0 }`), not `defaultProps`
- No inline styles unless dynamically computed
- Import order: React → external → internal components → types

After creating the file, show the full path and confirm it follows the existing component conventions seen in `components/ProductCard.tsx`.
