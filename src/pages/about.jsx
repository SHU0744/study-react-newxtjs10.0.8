import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";

export default function Home({
  doubleCount,
  isShow,
  handleClick,
  onClickShow,
  text,
  array,
  onChangeInput,
  onClickAdd,
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>aboutページ</title>
      </Head>
      <Header />
      <button onClick={onClickShow}>{isShow ? "非表示" : "表示"}</button>
      {isShow ? <h1>{doubleCount}</h1> : ""}
      <button onClick={handleClick}>カウントアップ</button>
      <input type="text" value={text} onChange={onChangeInput} />
      <button onClick={onClickAdd}>追加</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <Main page={"about"} />
      <Footer />
    </div>
  );
}
