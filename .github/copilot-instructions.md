# KzaVerde — GitHub Copilot Instructions

## Project Overview
KzaVerde is a Brazilian flower shop built with **Next.js 12 (Pages Router)**, React 17, TypeScript.
Products are stored in `data/catalog_updated_07_05_2026.json`. The site uses `next-intl` for i18n.

## Stack at a Glance
- **Framework**: Next.js 12, Pages Router — no App Router, no `app/` directory
- **UI**: React 17, TypeScript, `styled-jsx` for scoped CSS (no Tailwind, no CSS modules)
- **Data**: JSON file DB via `lib/db.ts` helpers (`getAllProducts`, `getProductById`, etc.)
- **API**: Next.js API routes with Swagger JSDoc + x-api-key auth via `lib/auth.ts`
- **i18n**: next-intl 2.10.0, flat key style, `locales/en.json`
- **Tests**: Jest + ts-jest

## Code Conventions

### Components — always use this shape
```tsx
import React, { FC } from "react";

interface MyComponentProps { prop: string; }

const MyComponent: FC<MyComponentProps> = ({ prop }) => (
  <div className="my-component">
    {prop}
    <style jsx>{`
      .my-component { /* scoped */ }
    `}</style>
  </div>
);

export default MyComponent;
```

### Pages — always include Head, Navigation, Footer
```tsx
import { GetStaticProps } from "next";
import Head from "next/head";
// ...
const Page: FC<Props> = () => (
  <>
    <Head><title>KzaVerde — Title</title></Head>
    <Navigation brandImageAlt="KzaVerde" />
    {/* content */}
    <Footer />
  </>
);
export const getStaticProps: GetStaticProps = async () => ({ props: {}, revalidate: 60 });
export default Page;
```

### API Routes — Swagger + auth required
```ts
// @swagger JSDoc block is mandatory on every handler
// Write ops (POST/PUT/DELETE) must call requireAuth(req) from lib/auth
// Response envelope: { success: boolean, data?, error?, message? }
```

### Product data shape
```ts
interface Product {
  id: number; name: string; price: string; // "R$ 89,00"
  displayPrice?: string; // "$" | "$$" | "$$$"
  description: string; image: string; images?: string[];
  category: string; rating?: number; reviews?: number;
  careInstructions?: string[];
}
```

## Available Prompt Files
Use `@workspace /new-component`, `/new-page`, `/new-api-route`, `/add-product`, `/write-tests`, `/add-translation` in Copilot Chat to trigger guided skill prompts from `.github/prompts/`.

## Do Not
- Use Tailwind, CSS modules, or emotion — only `styled-jsx`
- Use App Router patterns (`use client`, `use server`, `app/` directory)
- Skip Swagger JSDoc on API routes
- Skip `requireAuth` on write API methods
- Use `React.FC` shorthand — use `FC<Props>` with explicit import
