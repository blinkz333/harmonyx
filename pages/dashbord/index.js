import Head from "next/head";
import Link from "next/link";
import { Fragment, useState } from "react";
import NavbarComp from "../../components/navbar";
import { useAuth } from "../../context/AuthContext";

import {
  Card,
  CardColumns,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Input,
} from "reactstrap";

const Dashbord = () => {
  const { user } = useAuth();
  console.log("user", user);

  return (
    <>
      <Head>
        <title>Hamonyx - Home</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
        />
      </Head>
      <NavbarComp />
      <body>
        <div
          class="flex flex-wrap m-auto  items-center max-w-screen-xl p-4"
          style={{ display: "table" }}
        >
          <div class="w-[400px] max-h-full bg-gray-100 border-gray-300 border-1 rounded-md">
            {/* Date and add Task */}
            <div class="mt-8 ml-6">
              <div class="flex items-center">
                <div class="text-3xl font-bold w-10">25</div>
                <div class="text-xs">
                  Tuesday <br /> Dec 2018
                </div>
                <div class="text-3xl font-bold w-2 ml-[8rem]">
                  {/* <button class="bg-fuchsia-500 text-white rounded-full w-8 h-8 ">
                    <text>+</text>
                  </button> */}
                  <Button className="rounded-circle bg-fuchsia-500 font-bold border-0 hover:bg-fuchsia-300">
                    +
                  </Button>
                </div>
                <div class="ml-9 text-xs font-bold">NEW TASK</div>
              </div>
            </div>
            {/* TODO TASK */}
            <div class="mt-[3rem] ml-[8rem] font-serif font-bold tracking-wide">
              TODO TASKS
            </div>
            {/* Card */}
            <div class="flex justify-center">
              <CardColumns
                style={{
                  width: "370px",
                }}
              >
                <Card className="bg-[#fd6e41] rounded-md">
                  <CardBody>
                    <CardTitle
                      tag="h5"
                      className="font-bold text-[9px] text-white"
                    >
                      HIGH PRIORITY
                    </CardTitle>
                    <div class="flex items-center">
                      <CardText className="font-bold text-xl text-white tracking-wide">
                        Buy Presents
                      </CardText>
                      <Input
                        className="rounded-circle ml-auto"
                        type="checkbox"
                      />
                    </div>
                    <CardSubtitle
                      className="mt-1  text-xs text-white tracking-wide"
                      tag="h6"
                    >
                      Go and get Christmas presents for Lana and Sandra
                    </CardSubtitle>
                  </CardBody>
                </Card>
                <br />
              </CardColumns>
            </div>
            <div class="mt-[3rem] ml-[8rem] font-serif font-bold tracking-wide">
              DONE TASKS
            </div>
            <div class="flex justify-center">
              <CardColumns
                style={{
                  width: "370px",
                }}
              >
                <Card className="bg-[#00af3b] rounded-md">
                  <CardBody>
                    <CardTitle
                      tag="h5"
                      className="font-bold text-[9px] text-white"
                    >
                      DONE
                    </CardTitle>
                    <div class="flex items-center">
                      <CardText className="font-bold text-xl text-white tracking-wide">
                        Call James
                      </CardText>
                      <Input
                        className="rounded-circle ml-auto"
                        type="checkbox"
                      />
                    </div>
                    <CardSubtitle
                      className="mt-1  text-xs text-white tracking-wide"
                      tag="h6"
                    >
                      Call James for a meeting update
                    </CardSubtitle>
                  </CardBody>
                </Card>
                <br />
              </CardColumns>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Dashbord;
