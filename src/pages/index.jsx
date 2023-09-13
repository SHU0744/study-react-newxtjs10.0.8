import Head from "next/head";
import { Header } from "src/components/Header";

const Index = () => {
  return (
    <div>
      <Head>
        <title>Indexページ</title>
      </Head>
      <Header />
      <div className="mt-10">
        <h1 className="text-3xl">Next.jsで学ぶReact講座</h1>
        <p className="mt-4">JSONPlaceholderのAPIを色々叩いてみるよ</p>
      </div>
    </div>
  );
};

export default Index;
