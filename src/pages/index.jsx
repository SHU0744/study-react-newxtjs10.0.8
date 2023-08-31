import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);
  const [array, setArray] = useState([]);
  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
    }
  }, [count]);

  const onChangeInput = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("5文字以内にしてください");
      return;
    }
    setText(e.target.value);
  }, []);

  const onClickAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        alert("同じ要素がありますので異なるものを入力");
        return prevArray;
      }
      const newArray = [...prevArray, text];
      return newArray;
    });
  }, [text]);
  const onClickShow = useCallback(() => {
    setIsShow((previsShow) => !previsShow);
  }, []);
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
      <button onClick={onClickShow}>{isShow ? "非表示" : "表示"}</button>
      {isShow ? <h1>{count}</h1> : ""}
      <button onClick={handleClick}>カウントアップ</button>
      <input type="text" value={text} onChange={onChangeInput} />
      <button onClick={onClickAdd}>追加</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <Main page={"index"} />
      <Footer />
    </div>
  );
}
