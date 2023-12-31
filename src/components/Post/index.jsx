import Head from "next/dist/next-server/lib/head";
import { useRouter } from "next/router";
import { CommentsByPostId } from "src/components/Comments/commentsBypostId";
import { UserByUserId } from "src/components/User/UserByUserId";
import { usePost } from "src/hooks/usePost";

export const Post = () => {
  const Router = useRouter();
  const { data, error, isLoading } = usePost(Router.query.id);

  if (isLoading) {
    return <div>ローディング中</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{data?.title}</title>
      </Head>
      <div className="mt-10">
        <h3 className="text-2xl font-bold">{data?.title}</h3>
        <p>{data?.body}</p>
      </div>
      <UserByUserId id={data?.userId} />
      <CommentsByPostId id={data?.id} />
    </div>
  );
};
