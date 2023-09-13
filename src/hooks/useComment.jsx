import { useRouter } from "next/router";
import useSWR from "swr";

export const useComment = () => {
  const Router = useRouter();
  const { data, error, isLoading } = useSWR(
    Router.query.id
      ? `https://jsonplaceholder.typicode.com/comments/${Router.query.id}`
      : null
  );

  return {
    data,
    error,
    isLoading,
  };
};
