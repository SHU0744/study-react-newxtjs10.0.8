import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Header } from "src/components/Header";

import { useRouter } from "next/router";

const PostId = () => {
  const Router = useRouter();
  console.log(Router);
  return (
    <div className={styles.container}>
      <Head>
        <title>TOPページ</title>
      </Head>
      <Header />
      <div>{Router.query.id}</div>
    </div>
  );
};

export default PostId;
