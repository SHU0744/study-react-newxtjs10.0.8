import Head from "next/dist/next-server/lib/head";
import { usePost } from "src/hooks/usePost";

export const Post = () => {
  const { post, user, error, isLoading } = usePost();

  if (!isLoading) {
    return <div>ローディング中</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{post?.title}</title>
      </Head>
      <div>
        <h3>{post?.title}</h3>
        <p>{post?.body}</p>
      </div>
      <div>{user?.name ? <div>by {user.name}</div> : null}</div>
    </div>
  );
};
