import Link from "next/link";
import { usePostsByUserId } from "src/hooks/useFecthArray";

export const PostbyUserId = (props) => {
  const { data, error, isLoading, isEmpty } = usePostsByUserId(props.id);
  if (isLoading) {
    return <div>ローディング中</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  if (isEmpty) {
    return <div>データが空です。</div>;
  }
  return (
    <ol>
      {data?.map((post) => {
        return (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        );
      })}
    </ol>
  );
};
