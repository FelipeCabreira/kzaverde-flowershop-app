Create a new Next.js page for the KzaVerde project (Pages Router, Next.js 12).

**Arguments:** $ARGUMENTS
(Provide: route path, data requirements — static/server/none, components to include, page title)

## What to do

1. Determine file path: `pages/<route>.tsx` (dynamic routes use `[param].tsx`)
2. Choose data fetching strategy:
   - Static data (products, catalog) → `GetStaticProps` with `revalidate: 60`
   - Request-time data → `GetServerSideProps`
   - No data → plain FC, no data fetching
3. Create the page file:

```tsx
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { GetStaticProps } from "next";
import Head from "next/head";
import { FC } from "react";

interface <Name>PageProps {
  // props from getStaticProps
}

const <Name>Page: FC<<Name>PageProps> = ({ /* props */ }) => {
  return (
    <>
      <div className="<kebab-name>-container">
        <Head>
          <title>KzaVerde — <Page Title></title>
          <meta property="og:title" content="KzaVerde — <Page Title>" />
        </Head>
        <Navigation brandImageAlt="KzaVerde" />
        {/* page sections */}
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
  props: { /* data */ },
  revalidate: 60,
});

export default <Name>Page;
```

For dynamic routes, also add `getStaticPaths` that maps from existing product IDs or catalog slugs.

## Rules
- Every page needs `<Head>` with title + og:title
- Use `getAllProducts()` / `getProductById()` from `lib/db` for catalog data
- Page container classname must be unique and kebab-cased
