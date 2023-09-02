import Link from "next/link";
import styles from "src/components/Header/Header.module.css";

const NAV_ITEMS = [
  { href: "/", lavel: "index" },
  { href: "/about", lavel: "about" },
];

export const Header = () => {
  return (
    <header className={styles.header}>
      {NAV_ITEMS.map((item) => {
        return (
          <Link key={item.href} href={item.href}>
            {item.lavel}
          </Link>
        );
      })}
    </header>
  );
};
