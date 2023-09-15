import { useRouter } from "next/router";
import { API_URL } from "src/utils/const";
import useSWRImmutable from "swr/immutable";

export const useUser = () => {
  const Router = useRouter();
  const {
    data: user,
    error,
    isLoading,
  } = useSWRImmutable(
    Router.query.id ? `${API_URL}/users/${Router.query.id}` : null
  );

  return {
    user,
    error,
    isLoading,
  };
};
