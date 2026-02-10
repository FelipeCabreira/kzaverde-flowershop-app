import "../styles/main.scss";
import "./style.css";
import "swagger-ui-react/swagger-ui.css";

import React from "react";
import { GlobalProvider } from "../global-context";
import { NextIntlProvider } from "next-intl";
import { AppProps } from "next/app";

interface MyAppProps extends AppProps {
  pageProps: AppProps["pageProps"] & {
    messages?: any;
  };
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <NextIntlProvider messages={pageProps?.messages}>
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    </NextIntlProvider>
  );
}
