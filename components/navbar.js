import React from "react";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";

const NavbarComp = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  return (
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="/dashbord" class="flex items-center">
          <img
            src="https://www.harmonyx.co/wp-content/uploads/2020/02/Logo-with-title-3.png"
            class="h-8 mr-3"
            alt="Harmonyx"
          />
        </a>
        <div class="flex items-center">
          <button
            onClick={() => {
              logout();
              router.push("/login");
            }}
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComp;
