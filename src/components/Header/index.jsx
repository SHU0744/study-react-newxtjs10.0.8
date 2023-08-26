import Link from "next/link";
import styles from "src/components/Header/Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">index</Link>
      <Link href="/about">about</Link>
    </header>
  );
}
