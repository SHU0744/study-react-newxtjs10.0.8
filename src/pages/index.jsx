import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";
import { useCallback, useEffect } from "react";

export default function Home() {
  const foo = 123;
  const handleClick = useCallback((e) => {
    console.log(e.target);
    alert(foo);
  }, []);
  useEffect(() => {
    console.log("マウント時");
    document.body.style.backgroundColor = "red";
    return () => {
      console.log("アンマウント時");
      document.body.style.backgroundColor = "";
    };
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>TOPページ</title>
      </Head>
      <Header />
      <button onClick={handleClick}>クリック</button>
      <Main page={"index"} />
      <Footer />
    </div>
  );
}
