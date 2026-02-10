import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
import { GetServerSideProps } from "next";

const SwaggerUI = dynamic(() => import("swagger-ui-react"), {
  ssr: false,
});

export default function DocsPage() {
  return (
    <>
      <Head>
        <title>KzaVerde API Docs</title>
      </Head>
      <div style={{ padding: "24px" }}>
        <SwaggerUI url="/api/swagger" />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const host = req.headers.host || "";
  const hostname = host.split(":")[0].toLowerCase();
  const isLocalhost =
    hostname === "localhost" || hostname === "127.0.0.1" || hostname === "::1";

  if (!isLocalhost) {
    return { notFound: true };
  }

  return { props: {} };
};
