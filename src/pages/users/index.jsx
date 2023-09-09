import Head from "next/head";
import { Header } from "src/components/Header";
import { Users as UsersComponent } from "src/components/Users";
const Users = () => {
  return (
    <div>
      <Head>
        <title>Usersページ</title>
      </Head>
      <Header />
      <UsersComponent />
    </div>
  );
};

export default Users;
