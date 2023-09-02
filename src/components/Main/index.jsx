import styles from "src/components/Main/Main.module.css";
import { Headline } from "src/components/Headline";
import { Links } from "src/components/Links";
import { useCallback, useState } from "react";

const ITEMS = [
  {
    href: "https://nextjs.org/docs",
    title: "Documentation →",
    desc: "Find in-depth information about Next.js features and API.",
  },
  {
    href: "https://nextjs.org/learn",
    title: "Learn →",
    desc: "Learn about Next.js in an interactive course with quizzes!",
  },
  {
    href: "https://github.com/vercel/next.js/tree/master/examples",
    title: "Examples →",
    desc: "Discover and deploy boilerplate example Next.js projects.",
  },
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy →",
    desc: "Instantly deploy your Next.js site to a public URL with Vercel.",
  },
];

export function Main(props) {
  const { page } = props;
  const [items, setItems] = useState(ITEMS);

  const handlePop = useCallback(() => {
    setItems((prevItems) => {
      return prevItems.slice(0, prevItems.length - 1);
    });
  }, []);
  return (
    <main className={styles.main}>
      <Headline page={page} handlePop={handlePop}>
        <code className={styles.code}>{items.length}</code>
      </Headline>
      <Links items={items} />
    </main>
  );
}
