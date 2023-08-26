import styles from "src/components/Links/Links.module.css";
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
export function Links() {
  return (
    <div className={styles.grid}>
      {ITEMS.map((item) => {
        return (
          <a key={item.href} href={item.href} className={styles.card}>
            <h3 className={styles.title}>{item.title}</h3>
            <p>{item.desc}</p>
          </a>
        );
      })}
    </div>
  );
}
