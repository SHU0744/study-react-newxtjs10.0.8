import Link from "next/link";
import { useUsers } from "src/hooks/useFecthArray";

export const Users = () => {
  const { data, error, isLoading, isEmpty } = useUsers();
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
      {data.map((user) => {
        return (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        );
      })}
    </ol>
  );
};
