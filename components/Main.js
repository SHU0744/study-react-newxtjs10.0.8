import styles from "../styles/Home.module.css";
import { Links } from "../components/Links";
import { Headline } from "../components/Headline";

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
