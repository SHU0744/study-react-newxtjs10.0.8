import { useRouter } from "next/router";
import { API_URL } from "src/utils/const";
import useSWR from "swr";

export const useComment = () => {
  const Router = useRouter();
  const { data, error, isLoading } = useSWR(
    Router.query.id ? `${API_URL}/comments/${Router.query.id}` : null
  );

  return {
    data,
    error,
    isLoading,
  };
};
