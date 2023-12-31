import { API_URL } from "src/utils/const";
import useSWRImmutable from "swr/immutable";

const useFecthArray = (url) => {
  const { data, error, isLoading } = useSWRImmutable(url);

  return { data, error, isLoading, isEmpty: data && data.length === 0 };
};

export const usePosts = () => {
  return useFecthArray(`${API_URL}/posts`);
};

export const useUsers = () => {
  return useFecthArray(`${API_URL}/users`);
};

export const useComments = () => {
  return useFecthArray(`${API_URL}/comments`);
};

export const useCommentsByPostId = (id) => {
  return useFecthArray(id ? `${API_URL}/comments?postId=${id}` : null);
};

export const usePostsByUserId = (id) => {
  return useFecthArray(id ? `${API_URL}/posts?userId=${id}` : null);
};

export const usePostsById = (id) => {
  return useFecthArray(id ? `${API_URL}/posts?id=${id}` : null);
};

export const useCommentsById = (id) => {
  return useFecthArray(id ? `${API_URL}/comments?id=${id}` : null);
};
