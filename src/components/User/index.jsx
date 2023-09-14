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
      <div className="mt-15">
        <h3 className="text-2xl">{user?.name}</h3>
        <p>メール:{user?.email}</p>
      </div>
      <p className="mt-8">投稿記事</p>
      <PostbyUserId id={user?.id} />
    </div>
  );
};
