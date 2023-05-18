import Link from "next/link";
import Login from "./login/index";
import Signup from "./signup/index";
import Dasbord from './dashbord/index'

const Home = () => {
  return (
    <>
      <Link href={"/login"}>
        <Login />
      </Link>
      <Link href={"/signup"}>
        <Signup />
      </Link>
      <Link href={"/dashbord"}>
        <Dasbord />
      </Link>
    </>
  );
};

export default Home;
