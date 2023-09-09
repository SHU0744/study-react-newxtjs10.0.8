import Head from "next/dist/next-server/lib/head";
import { useComment } from "src/hooks/useComment";

export const Comment = () => {
  const { comment, error, isLoading } = useComment();

  if (isLoading) {
    return <div>ローディング中</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{comment?.name}</title>
      </Head>
      <div>
        <h3>{comment?.name}</h3>
        <p>{comment?.body}</p>
      </div>
    </div>
  );
};
