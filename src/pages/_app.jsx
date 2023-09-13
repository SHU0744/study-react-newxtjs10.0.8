import "../styles/globals.css";
import Head from "next/head";
import { Layout } from "src/components/Layout";
import { fetcher } from "src/utils/fetcher";
import { SWRConfig } from "swr";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SWRConfig value={{ fetcher }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </>
  );
};

export default MyApp;
