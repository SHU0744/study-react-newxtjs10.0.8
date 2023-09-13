import Link from "next/link";
import { usePosts } from "src/hooks/useFecthArray";

export const Posts = () => {
  const { data, error, isLoading, isEmpty } = usePosts();

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
    <ol className="space-y-4">
      {data.map((post) => {
        return (
          <li key={post.id} className="hover:text-blue-300">
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        );
      })}
    </ol>
  );
};
