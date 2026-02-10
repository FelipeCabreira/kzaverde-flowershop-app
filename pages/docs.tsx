import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
import { GetServerSideProps } from "next";
import { requireAuth, getClientIp, logSecurityEvent } from "../lib/auth";
import type { NextApiRequest } from "next";

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
  // Allow docs in development
  if (process.env.NODE_ENV === "development") {
    return { props: {} };
  }

  // In production, require authentication
  const apiKey = Array.isArray(req.headers["x-api-key"])
    ? req.headers["x-api-key"][0]
    : req.headers["x-api-key"];

  const isValid =
    apiKey &&
    requireAuth({
      headers: { "x-api-key": apiKey },
    } as unknown as NextApiRequest);

  if (!isValid) {
    const ip = getClientIp(req as unknown as NextApiRequest);
    logSecurityEvent({
      type: "UNAUTHORIZED_DOCS_ACCESS",
      endpoint: "/docs",
      ip: ip,
      status: 403,
      message: "Unauthorized documentation access attempt",
    });

    return {
      notFound: true,
    };
  }

  return { props: {} };
};
