import Head from "next/head";
import Link from "next/link";
import { Fragment, useState } from "react";
import NavbarComp from "../../components/navbar";
const Dashbord = () => {

  return (
    <>
      <Head>
        <title>Hamonyx - Home</title>
      </Head>
      <NavbarComp />
      <div>HI</div>
    </>
  );
};

export default Dashbord;
