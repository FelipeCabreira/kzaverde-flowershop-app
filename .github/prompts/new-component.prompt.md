---
mode: agent
tools:
  - codebase
  - editFiles
  - createFiles
description: Create a new React functional component following KzaVerde conventions
---

Create a new React functional component for the KzaVerde project.

Ask me (or use the context I've given) to determine:
- Component name (PascalCase)
- Props it needs
- Which subfolder under `components/`: `home/`, `product-detail/`, or root
- What it renders

Then create the file at `components/<subfolder>/<ComponentName>.tsx` with this exact pattern:

```tsx
import React, { FC } from "react";

interface <Name>Props {
  // typed props here
}

const <Name>: FC<<Name>Props> = ({ /* destructured props */ }) => {
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

Rules:
- Use `FC<Props>` with a named interface — never `React.FC`
- CSS inside `<style jsx>` only — no separate `.scss`, no Tailwind
- BEM class names: `.block__element--modifier`
- Defaults via destructuring (`{ count = 0 }`), not `defaultProps`
- No inline styles unless dynamically computed
- Reference `components/ProductCard.tsx` as the canonical example
