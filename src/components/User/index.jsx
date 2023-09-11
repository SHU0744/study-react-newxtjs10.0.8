import Head from "next/dist/next-server/lib/head";
import { PostbyUserId } from "src/components/Post/PostbyUserId";
import { useUser } from "src/hooks/useUser";

export const User = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return <div>ローディング中</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title> {user?.name}</title>
      </Head>
      <div>
        <h3>{user?.name}</h3>
        <p>{user?.email}</p>
      </div>
      <p>投稿記事</p>
      <PostbyUserId id={user?.id} />
    </div>
  );
};
