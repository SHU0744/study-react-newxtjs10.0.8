import { useRouter } from "next/router";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const usePost = () => {
  const Router = useRouter();
  const { data, error, isLoading } = useSWR(
    Router.query.id
      ? `https://jsonplaceholder.typicode.com/posts/${Router.query.id}`
      : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
  };
};
