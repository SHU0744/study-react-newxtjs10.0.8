import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((prev) => prev + 1);
    }
  }, [count]);
  useEffect(() => {
    // console.log("マウント時");
    // console.log(count);
    document.body.style.backgroundColor = "red";
    return () => {
      // console.log("アンマウント時");
      // console.log(count);
      document.body.style.backgroundColor = "";
    };
  }, [count]);
  return (
    <div className={styles.container}>
      <Head>
        <title>TOPページ</title>
      </Head>
      <Header />
      <h1>{count}</h1>
      <button onClick={handleClick}>クリック</button>
      <Main page={"index"} />
      <Footer />
    </div>
  );
}
