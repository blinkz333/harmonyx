import Head from "next/head";
import Link from "next/link";
import { Fragment, useState } from "react";
import NavbarComp from "../../components/navbar";
import { useAuth } from "../../context/AuthContext";
const Dashbord = () => {
  const { user } = useAuth();
  console.log("user", user);

  return (
    <>
      <Head>
        <title>Hamonyx - Home</title>
      </Head>
      <NavbarComp />
      <body>
        <div class="flex items-center justify-center mt-16">
          <div class="w-96 h-[35rem] bg-gray-100 border-black border-2 rounded-lg">
            <div class="mt-8 ml-6">
              <div class="flex items-center space-x-8">
                <div class="text-3xl font-bold w-10">25</div>
                <div class="text-xs">
                  Tuesday <br /> Dec 2018
                </div>
                <div class="text-3xl font-bold w-2 ml-8 ">
                  <button class="bg-fuchsia-500 text-white rounded-full w-8 h-8">+</button>
                </div>
                <div class="ml-8 text-xs font-bold">NEW TASK</div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Dashbord;
