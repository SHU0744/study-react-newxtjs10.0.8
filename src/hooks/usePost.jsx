import { useRouter } from "next/router";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const usePost = () => {
  const Router = useRouter();
  const {
    data: post,
    error: postError,
    isLoading: postIsLoading,
  } = useSWR(
    Router.query.id
      ? `https://jsonplaceholder.typicode.com/posts/${Router.query.id}`
      : null,
    fetcher
  );

  const {
    data: user,
    error: userError,
    isLoading: userIsLoading,
  } = useSWR(
    post?.userId
      ? `https://jsonplaceholder.typicode.com/users/${post.userId}`
      : null,
    fetcher
  );

  return {
    post,
    user,
    error: postError || userError,
    isLoading: !postIsLoading && !userIsLoading,
  };
};
