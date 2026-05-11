# KzaVerde — Shared AI Context

This file is the single source of truth for AI agent context across Claude Code and GitHub Copilot.
Skill definitions live in `.ai/skills/`. Claude commands are in `.claude/commands/`. Copilot prompts are in `.github/prompts/`.

## Project: KzaVerde
Brazilian flower shop — Next.js 12, React 17, TypeScript, file-based JSON catalog.

## Critical Patterns

### Component anatomy
```tsx
import React, { FC } from "react";

interface MyComponentProps {
  prop: string;
}

const MyComponent: FC<MyComponentProps> = ({ prop }) => {
  return (
    <div className="my-component">
      {prop}
      <style jsx>{`
        .my-component { /* scoped styles */ }
      `}</style>
    </div>
  );
};

export default MyComponent;
```

### Page anatomy (static)
```tsx
import { GetStaticProps } from "next";
import { FC } from "react";

interface Props { data: SomeType }

const MyPage: FC<Props> = ({ data }) => { ... };

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: { data },
  revalidate: 60,
});

export default MyPage;
```

### API Route anatomy
```ts
import type { NextApiRequest, NextApiResponse } from "next";
import { requireAuth, logSecurityEvent, getClientIp } from "../../../lib/auth";

/**
 * @swagger
 * /api/resource:
 *   get:
 *     summary: ...
 *     responses:
 *       200:
 *         description: ...
 */
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    // public read
  } else if (req.method === "POST") {
    if (!requireAuth(req)) {
      logSecurityEvent({ type: "UNAUTHORIZED_API_ACCESS", ... });
      return res.status(401).json({ success: false, error: "Unauthorized." });
    }
    // write operation
  }
}
```

### Product data
- File: `data/catalog_updated_07_05_2026.json` → `{ catalog: Product[] }`
- Helper fns: `getAllProducts`, `getProductById`, `createProduct`, `updateProduct`, `deleteProduct` from `lib/db`
- Images: `public/catalog/<folder>/<name>.png`

### i18n
- Single locale file: `locales/en.json`
- Pattern: flat keys, e.g. `"nav.home": "Home"`
- Access in components via `useTranslations` hook from `next-intl`

## Available Skills
| Skill | Claude Command | Copilot Prompt |
|---|---|---|
| Create React component | `/new-component` | `new-component` |
| Create Next.js page | `/new-page` | `new-page` |
| Create API route | `/new-api-route` | `new-api-route` |
| Add product to catalog | `/add-product` | `add-product` |
| Write Jest tests | `/write-tests` | `write-tests` |
| Add i18n translation | `/add-translation` | `add-translation` |
