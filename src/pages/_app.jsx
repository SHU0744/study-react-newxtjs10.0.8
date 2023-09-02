import "src/styles/globals.css";
import Head from "next/head";
import { useCounter } from "src/hooks/useCounter";
import { useInputAdd } from "src/hooks/useInputAdd";
import { useBgColor } from "src/hooks/useBgColor";

const MyApp = ({ Component, pageProps }) => {
  const counter = useCounter();
  const InputAdd = useInputAdd();
  useBgColor();
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} {...counter} {...InputAdd} />
    </>
  );
};

export default MyApp;
