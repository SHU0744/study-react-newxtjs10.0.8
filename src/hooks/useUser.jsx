import { useRouter } from "next/router";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const useUser = () => {
  const Router = useRouter();
  const {
    data: user,
    error: userError,
    isLoading: userIsLoading,
  } = useSWR(
    Router.query.id
      ? `https://jsonplaceholder.typicode.com/users/${Router.query.id}`
      : null,
    fetcher
  );

  return {
    user,
    error: userError,
    isLoading: userIsLoading,
  };
};
