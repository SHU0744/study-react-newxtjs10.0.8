import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  useEffect(() => {
    // console.log("マウント時");
    document.body.style.backgroundColor = "red";
    return () => {
      // console.log("アンマウント時");
      document.body.style.backgroundColor = "";
    };
  }, []);
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
