import React, { useEffect, useState } from "react";
import styles from "../styles/createtask.module.css";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Box,
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const taskInfo = {
  employeeName: "",
  info: "",
  startTime: "",
  endTime: "",
};

const CreateTask = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const toast = useToast();
  const token = localStorage.getItem("token");
  const [value, onChange] = useState(new Date());
  const [task, setTask] = useState(taskInfo);
  const [isStartCalendarOpen, setIsStartCalendarOpen] = useState(false);
  const [isEndCalendarOpen, setIsEndCalendarOpen] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [isTaskCreated, setIsTaskCreated] = useState("");
  const navigate = useNavigate();
  console.log(task);

  const handleStartCalendar = () => {
    setIsStartCalendarOpen(!isStartCalendarOpen);
  };

  const handleEndCalendar = () => {
    setIsEndCalendarOpen(!isEndCalendarOpen);
  };

  const handleInfo = (e) => {
    let { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleAddTask = () => {
    setTask({
      ...task,
      startTime: startTime,
      endTime: endTime,
      employeeName: employeeName,
    });
    fetch("https://bitrix24.onrender.com//task/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: task,
    })
      .then((res) => res.json())
      .then((res) => setIsTaskCreated(res.message));
  };

  const handleAddEmployee = (name) => {
    setEmployeeName(name);
  };

  const handleGetEmployee = () => {
    fetch("https://bitrix24.onrender.com/employee", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setEmployees(res);
      });
  };
  useEffect(() => {
    if (isTaskCreated == "task created successfully") {
      toast({
        title: "Task created.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      navigate("/homepage");
    }
  }, [isTaskCreated]);
  return (
    <div>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        size="xl"
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>New Task</DrawerHeader>

          <DrawerBody>
            <div className={styles.create_task_container_main}>
              <div className={styles.task_heading_div}>
                <input
                  onChange={handleInfo}
                  className={styles.task_input_box}
                  type="text"
                  name="info"
                  value={task.info}
                  placeholder="Things to do"
                />
              </div>
              <div
                onClick={() => {
                  setEmployees([]);
                }}
                className={styles.task_info_container}
              >
                <div className={styles.employee_tag_box}>
                  <p className={styles.set_text_responsible}>
                    Responsible Person
                  </p>
                  <Box className={styles.set_employee_tag_box}>
                    {employeeName != "" ? (
                      <Tag size="lg" variant="subtle" colorScheme="green">
                        <TagLabel>{employeeName}</TagLabel>
                        <TagCloseButton
                          onClick={() => {
                            setEmployeeName("");
                          }}
                        />
                      </Tag>
                    ) : null}
                    <Tag onClick={handleGetEmployee} size="lg" variant="subtle">
                      <TagLeftIcon boxSize="12px" as={MdAdd} />
                      <p>add</p>
                    </Tag>
                  </Box>
                </div>
                <div className={styles.employees_display_div}>
                  {employees.map((e) => (
                    <div
                      style={{
                        display: "flex",
                        borderBottom: "1px solid #c6cdd3",
                        padding: "10px",
                      }}
                    >
                      <Icon marginRight="10px" as={FaUserCircle} />
                      <p
                        onClick={() => handleAddEmployee(e.name)}
                        name="employee"
                        value={e.name}
                        style={{ marginRight: "10%" }}
                        key={e._id}
                      >
                        {e.name}
                      </p>
                    </div>
                  ))}
                </div>
                <div className={styles.deadline_box}>
                  <p className={styles.set_text_responsible_1}>Deadline</p>
                  <div className={styles.start_time_container}>
                    <p>Start Time</p>
                    <HStack
                      onClick={handleStartCalendar}
                      className={styles.calendar_stack}
                    >
                      <p className={styles.set_date_calendar}>{startTime}</p>

                      <Icon as={FaRegCalendarAlt} />
                    </HStack>
                  </div>
                  <div className={styles.start_time_container}>
                    <p>End Time</p>
                    <HStack
                      onClick={handleEndCalendar}
                      className={styles.calendar_stack}
                    >
                      <p className={styles.set_date_calendar}>{endTime}</p>
                      <Icon as={FaRegCalendarAlt} />
                    </HStack>
                  </div>
                </div>
                {isStartCalendarOpen ? (
                  <div className={styles.set_calendar_div}>
                    <Calendar
                      onClickDay={() => {
                        setStartTime(
                          `${value.getDate()}/${value.getMonth()}/${value.getFullYear()}`
                        );
                      }}
                      onChange={onChange}
                      value={value}
                    />
                  </div>
                ) : (
                  ""
                )}
                {isEndCalendarOpen ? (
                  <div className={styles.set_calendar_div}>
                    <Calendar
                      onClickDay={() => {
                        setEndTime(
                          `${value.getDate()}/${value.getMonth()}/${value.getFullYear()}`
                        );
                      }}
                      onChange={onChange}
                      value={value}
                    />
                  </div>
                ) : (
                  ""
                )}
                <div className={styles.add_task_btn_div}>
                  <button
                    onClick={handleAddTask}
                    className={styles.add_task_btn}
                  >
                    Add Task
                  </button>
                </div>
              </div>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default CreateTask;
