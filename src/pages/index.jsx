import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";
import { useCounter } from "src/hooks/useCounter";
import { useInputAdd } from "src/hooks/useInputAdd";
import { useBgRed } from "src/hooks/useBgRed";

export default function Home() {
  const { count, isShow, handleClick, onClickShow } = useCounter();
  const { text, array, onChangeInput, onClickAdd } = useInputAdd();
  useBgRed(count);

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
