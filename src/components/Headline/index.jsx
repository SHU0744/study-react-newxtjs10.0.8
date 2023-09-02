import styles from "src/components/Headline/Headline.module.css";
export function Headline(props) {
  const { page, handlePop, children } = props;
  return (
    <div>
      <h1 className={styles.title}>{page} page</h1>
      <p className={styles.description}>リンクの数は {children}</p>
      <button onClick={handlePop}>リンク減らす</button>
    </div>
  );
}
