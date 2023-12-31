import Link from "next/link";
import { useCommentsByPostId } from "src/hooks/useFecthArray";

export const CommentsByPostId = (props) => {
  const { data, error, isLoading, isEmpty } = useCommentsByPostId(props.id);
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
      {data?.map((comment) => {
        return (
          <li key={comment.id} className="hover:text-blue-300">
            <Link href={`/comments/${comment.id}`}>{comment.body}</Link>
          </li>
        );
      })}
    </ol>
  );
};
