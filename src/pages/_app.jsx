import "tailwindcss/tailwind.css";
import Head from "next/head";
import { Layout } from "src/components/Layout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="text-red-700">test</div>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
