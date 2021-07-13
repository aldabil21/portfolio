import * as React from "react";
import Layout from "../src/components/layout/Layout";
import { AppProps } from "next/app";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import MuiProvider from "../src/theme/Provider";
import { appWithTranslation } from "next-i18next";
import "../styles/globals.css";

const cache = createCache({ key: "css", prepend: true });
cache.compat = true;

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <CacheProvider value={cache}>
      <MuiProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MuiProvider>
    </CacheProvider>
  );
};

export default appWithTranslation(MyApp);
