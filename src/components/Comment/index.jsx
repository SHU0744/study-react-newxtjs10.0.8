import Head from "next/dist/next-server/lib/head";
import { PostbyId } from "src/components/Post/PostbyId";
import { useComment } from "src/hooks/useComment";

export const Comment = () => {
  const { data, error, isLoading } = useComment();

  if (isLoading) {
    return <div>ローディング中</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{data?.name}</title>
      </Head>
      <div>
        <h3>{data?.name}</h3>
        <p>{data?.body}</p>
      </div>
      <p>元の記事</p>
      <PostbyId id={data?.postId} />
    </div>
  );
};
