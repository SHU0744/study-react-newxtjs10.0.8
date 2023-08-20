import styles from "../styles/Home.module.css";
export function Headline(props) {
  const { page } = props;
  return (
    <div>
      <h1 className={styles.title}>{page} page</h1>
      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/{`${page}`}.js</code>
      </p>
    </div>
  );
}
