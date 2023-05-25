import Head from "next/head";
import Link from "next/link";
import { Fragment, useState, useEffect } from "react";
import NavbarComp from "../../components/navbar";
import { getDocument, InsertDocument, updateToDone } from "../../config/store";

import {
  Card,
  CardColumns,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Form,
} from "reactstrap";

import Swal from "sweetalert2";

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
  const [modal, setModal] = useState(false);

  const [task, setTask] = useState([]);

  const [newTask_priority, setNewTaskPriority] = useState(null);
  const [newTask_name, setNewTaskName] = useState(null);
  const [newTask_description, setNewTaskDescription] = useState(null);

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
    // 0 = DONE
    // 1 = TODO

    if (type === 1) {
      return (
        <>
          {task.length > 0 ? (
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
                            onClick={() => handleUpdateDone(index)}
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
                            onClick={() => handleUpdateDone(index)}
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
                            onClick={() => handleUpdateDone(index)}
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
            })
          ) : (
            <>
              <Card className="bg-[#bbb9b8] rounded-md">
                <CardBody>
                  <CardTitle
                    tag="h5"
                    className="font-bold text-[9px] text-white"
                  ></CardTitle>
                  <div class="flex items-cente">
                    <CardText className="font-bold text-xl text-white tracking-wide flex m-auto">
                      NO CARD ...
                    </CardText>
                  </div>
                  <CardSubtitle
                    className="mt-1  text-xs text-white tracking-wide"
                    tag="h6"
                  ></CardSubtitle>
                </CardBody>
              </Card>
            </>
          )}
        </>
      );
    } else {
      return (
        <>
          {task.length > 0 ? (
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
                          Done
                        </CardTitle>
                        <div class="flex items-center">
                          <CardText className="font-bold text-xl text-white tracking-wide">
                            {items.title}
                          </CardText>
                          <Input
                            className="rounded-circle ml-auto"
                            type="checkbox"
                            checked
                            disabled
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
            })
          ) : (
            <Card className="bg-[#bbb9b8] rounded-md">
              <CardBody>
                <CardTitle
                  tag="h5"
                  className="font-bold text-[9px] text-white"
                ></CardTitle>
                <div class="flex items-cente">
                  <CardText className="font-bold text-xl text-white tracking-wide flex m-auto">
                    NO CARD ...
                  </CardText>
                </div>
                <CardSubtitle
                  className="mt-1  text-xs text-white tracking-wide"
                  tag="h6"
                ></CardSubtitle>
              </CardBody>
            </Card>
          )}
        </>
      );
    }
  };

  const handleSaveData = async (e) => {
    e.preventDefault();
    const obj = {
      priority: newTask_priority,
      title: newTask_name,
      description: newTask_description,
    };

    const results = await InsertDocument(uid, obj);
    if (results) {
      Swal.fire({
        icon: "success",
        title: "บันทึกข้อมูลเรียบร้อย",
        confirmButtonText: "ตกลง",
      }).then((result) => {
        if (result.isConfirmed) {
          setModal(!modal);
          const clone_task = [...task];
          clone_task.push(obj);
          setTask(clone_task);
          setNewTaskPriority(null);
          setNewTaskName(null);
          setNewTaskDescription(null);
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "ข้อผิดพลาด...",
        text: "ไม่สามารถบันทึกข้อมูลได้!",
      });
    }
  };

  const handleUpdateDone = async (index) => {
    const results = updateToDone(uid, index);
    if (results) {
      const clone_task = [...task];
      clone_task[index].priority = 0;
      setTask(clone_task);
    }
  };

  const toggle = () => setModal(!modal);

  return (
    <>
      <Head>
        <title>Hamonyx - Home</title>
      </Head>

      <body>
        <div class="flex flex-col h-screen ">
          <header>
            <NavbarComp />
          </header>
          <main class="flex-1 overflow-y-auto p-5">
            <div
              class="flex flex-wrap m-auto items-center max-w-screen-xl "
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
                      <Button
                        onClick={toggle}
                        className="rounded-circle bg-fuchsia-500 font-bold border-0 hover:bg-fuchsia-800 focus:bg-fuchsia-500 outline-0"
                      >
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

          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader className="font-bold text-2xl">ADD TODO</ModalHeader>
            <Form onSubmit={(e) => handleSaveData(e)}>
              <ModalBody>
                <FormGroup>
                  <Label className="font-bold">PRIORITY</Label>
                  <Input
                    type="select"
                    name="category"
                    required
                    defaultValue=""
                    onChange={(e) =>
                      e.target.value
                        ? setNewTaskPriority(parseInt(e.target.value))
                        : ""
                    }
                  >
                    <option value="" disabled>
                      Select priority
                    </option>
                    <option value={"1"}>HIGH</option>
                    <option value={"2"}>NORMAL</option>
                    <option value={"3"}>LOW</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Todo Name : </Label>
                  <Input
                    id="todo_name"
                    name="todo_name"
                    placeholder="Todo name..."
                    type="text"
                    required
                    value={newTask_name}
                    onChange={(e) => setNewTaskName(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Description : </Label>
                  <Input
                    id="todo_description"
                    name="todo_description"
                    placeholder="Description..."
                    type="text"
                    value={newTask_description}
                    onChange={(e) => setNewTaskDescription(e.target.value)}
                  />
                </FormGroup>
              </ModalBody>
              <ModalFooter>
                <Button className=" bg-green-500 font-bold border-0 hover:bg-green-800 focus:hover:bg-green-800">
                  Save
                </Button>
                <Button
                  className=" bg-red-500 font-bold border-0 hover:bg-red-800 focus:hover:bg-red-800"
                  onClick={toggle}
                >
                  Cancel
                </Button>
              </ModalFooter>
            </Form>
          </Modal>
        </div>
      </body>
    </>
  );
};

export default Dashbord;
