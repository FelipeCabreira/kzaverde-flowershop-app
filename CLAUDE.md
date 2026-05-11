# KzaVerde — Claude Code Project Context

## Project Overview
KzaVerde is a Brazilian flower shop storefront built with **Next.js 12 (Pages Router)**, **React 17**, and **TypeScript**. Products are stored in JSON files under `data/`. The site is bilingual-ready via `next-intl` (currently only `en` locale active at `locales/en.json`).

## Stack
| Layer | Tech |
|---|---|
| Framework | Next.js 12, Pages Router (`pages/`) |
| UI | React 17 + TypeScript, `styled-jsx` for scoped CSS |
| Data | JSON file DB — `data/catalog_updated_07_05_2026.json` |
| i18n | next-intl, locale files in `locales/` |
| API | Next.js API Routes (`pages/api/`), Swagger JSDoc, x-api-key auth |
| Tests | Jest + ts-jest |
| Styles | Global CSS in `pages/style.css`, scoped via `styled-jsx` |

## Key Conventions

### Components
- All components are `FC<Props>` with a named interface
- CSS lives inside the component file via `<style jsx>{...}</style>` — no separate `.scss` files for components
- Named exports for domain-specific; default export for the component itself
- BEM-style class names: `.component-name__element`

### Pages
- Use `GetStaticProps` for product/catalog pages (`revalidate: 60`)
- Use `GetServerSideProps` only when data must be request-time fresh
- Head metadata (title, og:title) required on every page

### API Routes
- Every route must have a `@swagger` JSDoc block (see `pages/api/products/index.ts`)
- Write operations (POST/PUT/DELETE) must call `requireAuth(req)` from `lib/auth`
- Always log failed auth via `logSecurityEvent(...)`
- Response envelope: `{ success: boolean, data?: any, error?: string, message?: string }`

### Data / Product Model
```typescript
interface Product {
  id: number;
  name: string;
  price: string;          // e.g. "R$ 89,00"
  displayPrice?: string;  // e.g. "$$"
  description: string;
  image: string;          // path under /catalog/
  images?: string[];
  category: string;       // e.g. "bestsellers", "ocasioes-especiais"
  rating?: number;
  reviews?: number;
  careInstructions?: string[];
}
```
Catalog file: `data/catalog_updated_07_05_2026.json` — key `catalog: Product[]`

### Tests
- Test files: `__tests__/` folder or alongside source as `*.test.ts`
- Config: `jest.config.js` with `ts-jest` preset
- No mocking of `lib/db` unless absolutely necessary — prefer real data reads

## Agentic Skills
Custom slash commands are in `.claude/commands/`. Run them as `/new-component`, `/new-page`, etc.
See `.ai/skills/` for the canonical skill definitions shared with GitHub Copilot.

## Directory Map
```
pages/           Next.js pages + API routes
components/      React components (home/, product-detail/, shared)
lib/             db.ts, auth.ts, whatsapp.ts, hooks.ts, swagger.ts
data/            JSON product catalog files
public/catalog/  Product images
locales/         i18n JSON files (en.json)
.ai/             Shared AI skill definitions
.claude/         Claude Code config + slash commands
.github/         Copilot instructions + prompt files
```
