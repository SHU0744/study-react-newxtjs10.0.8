import { useCallback, useEffect, useReducer } from "react";

const inishalState = {
  data: [],
  loading: true,
  error: null,
};
const reducer = (prevState, { type, data, error }) => {
  switch (type) {
    case "end":
      return {
        ...prevState,
        data: data,
        loading: false,
      };

    case "error":
      return {
        ...prevState,
        loading: false,
        error: error,
      };

    default:
      throw new Error("error");
  }
};

export const Posts = () => {
  const [state, dispatch] = useReducer(reducer, inishalState);
  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new Error("エラーが発生したため、データの取得に失敗しました");
      }
      const json = await res.json();
      dispatch({ type: "end", data: json });
    } catch (error) {
      dispatch({ type: "error", error: error });
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (state.loading) {
    return <div>ローディング中</div>;
  }
  if (state.error) {
    return <div>{state.error.message}</div>;
  }
  if (state.data.length === 0) {
    return <div>データが空です。</div>;
  }
  return (
    <ol>
      {state.data.map((post) => {
        return <li key={post.id}>{post.title}</li>;
      })}
    </ol>
  );
};
