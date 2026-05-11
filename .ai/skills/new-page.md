# Skill: new-page

Create a new Next.js page in the KzaVerde project (Pages Router, Next.js 12).

## Inputs
- Page route (maps directly to file path under `pages/`)
- Data requirements: static props, server-side props, or no data fetching
- Components to include
- SEO: title and og:title

## Rules
1. File: `pages/<route>.tsx` or `pages/<route>/index.tsx`
2. Dynamic routes use `[param].tsx` syntax
3. Static data → `GetStaticProps` with `revalidate: 60`
4. Request-time data → `GetServerSideProps`
5. No data → plain FC, no `getStaticProps`
6. Every page must include `<Head>` with `<title>` and `<meta property="og:title">`
7. Wrap content in a page container div with a unique className
8. Include `<Navigation>` and `<Footer>` unless it's a special layout
9. Page-level styles via `<style jsx>` at bottom of JSX

## Static page template
```tsx
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { GetStaticProps } from "next";
import Head from "next/head";
import { FC } from "react";

interface <Name>PageProps {
  // props
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

export const getStaticProps: GetStaticProps<<Name>PageProps> = async () => {
  return {
    props: { /* data */ },
    revalidate: 60,
  };
};

export default <Name>Page;
```

## Dynamic route template (e.g. pages/category/[slug].tsx)
```tsx
import { GetStaticPaths, GetStaticProps } from "next";
// ...

export const getStaticPaths: GetStaticPaths = async () => {
  const items = getAllProducts(); // or whatever
  return {
    paths: items.map((item) => ({ params: { slug: String(item.id) } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const item = getProductById(Number(params?.slug));
  if (!item) return { notFound: true };
  return { props: { item }, revalidate: 60 };
};
```
