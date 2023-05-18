import Link from "next/link";
import Login from './login/index'
import Signup from './signup/index'
const Home = () => {
  return (
   <>
    <Link href={"/login"}><Login/></Link>
    <Link href={"/signup"}><Signup/></Link>
   </>
  );
};

export default Home;
