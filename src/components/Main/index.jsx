import styles from "src/components/Main/Main.module.css";
import { Headline } from "src/components/Headline";
import { Links } from "src/components/Links";

export function Main(props) {
  const { page } = props;
  return (
    <main className={styles.main}>
      <Headline page={page}>
        <code className={styles.code}>pages/{page}.js</code>
      </Headline>
      <Links />
    </main>
  );
}
