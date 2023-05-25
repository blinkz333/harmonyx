"use client";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import Swal from "sweetalert2";
import { useAuth } from "../../context/AuthContext";

const Signup = () => {
  const {user , signup} = useAuth()
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirm_password, setComfirmPassword] = useState(null);
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();

    if (password === confirm_password) {
      const { result, error } = await signup(email, password);
      
      if (error) {
        Swal.fire({
          icon: "error",
          title: "ข้อผิดพลาด...",
          text: "มีผู้ใช้งานรายนี้แล้ว!",
        });
      } else {
        Swal.fire({
          icon: "success",
          title: "เข้าสู่ระบบสำเร็จ",
          confirmButtonText: "ตกลง",
        }).then((result) => {
          if (result.isConfirmed) {
            return router.push("/dashbord");
          }
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "ข้อผิดพลาด...",
        text: "รหัสผ่านไม่ตรงกัน!",
      });
    }
  };

  return (
    <>
      <Head>
        <title>HamonyX - Signup</title>
      </Head>
      <Fragment>
        <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
          <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
            <img src="https://www.harmonyx.co/wp-content/uploads/2020/02/Logo-with-title-3.png" />
            <form onSubmit={handleForm} className="mt-6">
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Email
                </label>
                <input
                  required
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Password
                </label>
                <input
                  required
                  type="password"
                  minLength={6}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Confirm Password
                </label>
                <input
                  required
                  type="password"
                  minLength={6}
                  onChange={(e) => setComfirmPassword(e.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mt-2">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                  Sign Up!
                </button>
              </div>
            </form>

            <p className="mt-4 text-sm text-center text-gray-700">
              if you have account{" "}
              <Link
                href="/login"
                className="font-medium text-blue-600 hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </Fragment>
    </>
  );
};

export default Signup;
