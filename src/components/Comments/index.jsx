import Link from "next/link";
import { useComments } from "src/hooks/useFecthArray";

export const Comments = () => {
  const { data, error, isLoading, isEmpty } = useComments();
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
      {data.map((comment) => {
        return (
          <li key={comment.id}>
            <Link href={`/comments/${comment.id}`} prefetch={true}>
              {comment.body}
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
