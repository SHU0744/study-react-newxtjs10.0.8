import { useRouter } from "next/router";
import useSWRImmutable from "swr/immutable";

export const useUser = () => {
  const Router = useRouter();
  const {
    data: user,
    error,
    isLoading,
  } = useSWRImmutable(
    Router.query.id
      ? `https://jsonplaceholder.typicode.com/users/${Router.query.id}`
      : null
  );

  return {
    user,
    error,
    isLoading,
  };
};
