---
mode: agent
tools:
  - codebase
  - editFiles
  - createFiles
description: Create a new Next.js page following KzaVerde conventions (Pages Router)
---

Create a new Next.js page for the KzaVerde project. This is a Pages Router (Next.js 12) project — no `app/` directory.

Ask me (or use context) for:
- Route path (becomes the file path under `pages/`)
- Data requirements: static catalog data, server-side, or none
- Page title (for `<Head>`)
- Sections/components to include

Create the file at `pages/<route>.tsx`:

```tsx
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { GetStaticProps } from "next";
import Head from "next/head";
import { FC } from "react";

interface <Name>PageProps {
  // data props
}

const <Name>Page: FC<<Name>PageProps> = ({ /* props */ }) => {
  return (
    <>
      <div className="<kebab-name>-container">
        <Head>
          <title>KzaVerde — <Title></title>
          <meta property="og:title" content="KzaVerde — <Title>" />
        </Head>
        <Navigation brandImageAlt="KzaVerde" />
        {/* page content */}
        <Footer />
      </div>
      <style jsx>{`
        .<kebab-name>-container {
          width: 100%;
          display: block;
          min-height: 100vh;
        }
      `}</style>
    </>
  );
};

export const getStaticProps: GetStaticProps<<Name>PageProps> = async () => ({
  props: {},
  revalidate: 60,
});

export default <Name>Page;
```

For catalog/product data: use `getAllProducts()` or `getProductById()` from `lib/db`.
For dynamic routes: add `getStaticPaths` mapping product IDs or category slugs.
