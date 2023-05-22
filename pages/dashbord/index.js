import Head from "next/head";
import Link from "next/link";
import { Fragment, useState, useEffect } from "react";
import NavbarComp from "../../components/navbar";
import { getDocument } from "../../config/store";

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

const dayName = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

import { useAuth } from "../../context/AuthContext";

const Dashbord = () => {
  const [task, setTask] = useState([]);

  const {
    user: { uid },
  } = useAuth();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const doc = await getDocument(uid);
    setTask(doc);
  };

  const _renderTask = ({ type }) => {
    console.log(type);
    // 0 = DONE
    // 1 = TODO

    if (type === 1) {
      return (
        <>
          {task.length > 0 &&
            task.map((items, index) => {
              if (items.priority === 1) {
                return (
                  <>
                    <Card key={index} className="bg-[#fd6e41] rounded-md">
                      <CardBody>
                        <CardTitle
                          tag="h5"
                          className="font-bold text-[9px] text-white"
                        >
                          HIGH PRIORITY
                        </CardTitle>
                        <div class="flex items-center">
                          <CardText className="font-bold text-xl text-white tracking-wide">
                            {items.title}
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
                          {items.description}
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                    <br />
                  </>
                );
              } else if (items.priority === 2) {
                return (
                  <>
                    <Card key={index} className="bg-[#fac356] rounded-md">
                      <CardBody>
                        <CardTitle
                          tag="h5"
                          className="font-bold text-[9px] text-white"
                        >
                          NORMAL PRIORITY
                        </CardTitle>
                        <div class="flex items-center">
                          <CardText className="font-bold text-xl text-white tracking-wide">
                            {items.title}
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
                          {items.description}
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                    <br />
                  </>
                );
              } else if (items.priority === 3) {
                return (
                  <>
                    <Card key={index} className="bg-[#b0d23d] rounded-md">
                      <CardBody>
                        <CardTitle
                          tag="h5"
                          className="font-bold text-[9px] text-white"
                        >
                          LOW PRIORITY
                        </CardTitle>
                        <div class="flex items-center">
                          <CardText className="font-bold text-xl text-white tracking-wide">
                            {items.title}
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
                          {items.description}
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                    <br />
                  </>
                );
              }
            })}
        </>
      );
    } else {
      return (
        <>
          {task.length > 0 &&
            task.map((items, index) => {
              if (items.priority === 0) {
                return (
                  <>
                    <Card key={index} className="bg-[#6dc9f7] rounded-md">
                      <CardBody>
                        <CardTitle
                          tag="h5"
                          className="font-bold text-[9px] text-white"
                        >
                          LOW PRIORITY
                        </CardTitle>
                        <div class="flex items-center">
                          <CardText className="font-bold text-xl text-white tracking-wide">
                            {items.title}
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
                          {items.description}
                        </CardSubtitle>
                      </CardBody>
                    </Card>
                    <br />
                  </>
                );
              }
            })}
        </>
      );
    }
  };

  return (
    <>
      <Head>
        <title>Hamonyx - Home</title>
      </Head>

      <body>
        <div class="flex flex-col h-screen">
          <header>
            <NavbarComp />
          </header>
          <main class="flex-1 overflow-y-auto p-5">
            <div
              class="flex flex-wrap m-auto  items-center max-w-screen-xl p-4"
              style={{ display: "table" }}
            >
              <div class="w-[400px] max-h-full bg-gray-100 border-gray-300 border-1 rounded-md">
                {/* Date and add Task */}
                <div class="mt-8 ml-6">
                  <div class="flex items-center">
                    <div class="text-3xl font-bold w-10">
                      {new Date().getDate()}
                    </div>
                    <div class="text-xs">
                      {dayName[new Date().getDay()]} <br />{" "}
                      {`${
                        monthNames[new Date().getMonth()]
                      } ${new Date().getFullYear()}`}
                    </div>
                    <div class="text-3xl font-bold w-2 ml-[8rem]">
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
                    <br />
                    <_renderTask type={1} />
                  </CardColumns>
                </div>
                <div class="mt-[3rem] ml-[8rem] font-serif font-bold tracking-wide">
                  DONE TASKS
                </div>
                <br />
                <div class="flex justify-center">
                  <CardColumns
                    style={{
                      width: "370px",
                    }}
                  >
                    {/* <Card className="bg-[#00af3b] rounded-md"> */}
                    <_renderTask type={0} />
                    <br />
                  </CardColumns>
                </div>
              </div>
            </div>
          </main>
        </div>
      </body>
    </>
  );
};

export default Dashbord;
