import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

const useFecthArray = (url) => {
  const { data, error, isLoading } = useSWR(url, fetcher);

  return { data, error, isLoading, isEmpty: data && data.length === 0 };
};

const API_URL = "https://jsonplaceholder.typicode.com";
export const usePosts = () => {
  return useFecthArray(`${API_URL}/posts`);
};

export const useUsers = () => {
  return useFecthArray(`${API_URL}/users`);
};

export const useComments = () => {
  return useFecthArray(`${API_URL}/comments`);
};