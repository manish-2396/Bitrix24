import React, { useState } from "react";
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
import { MdAdd } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";

const CreateTask = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [value, onChange] = useState(new Date());
  const [isStartCalendarOpen, setIsStartCalendarOpen] = useState(false);
  const [isEndCalendarOpen, setIsEndCalendarOpen] = useState(false);
  const [data, setData] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  console.log(startTime);
  console.log(endTime);
  const handleStartCalendar = () => {
    setIsStartCalendarOpen(!isStartCalendarOpen);
  };

  const handleEndCalendar = () => {
    setIsEndCalendarOpen(!isEndCalendarOpen);
  };

  const handleAddEmployee=()=>{

  }

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
                  onChange={(e) => setData(e.target.value)}
                  className={styles.task_input_box}
                  type="text"
                  placeholder="Things to do"
                />
              </div>
              <div className={styles.task_info_container}>
                <div className={styles.employee_tag_box}>
                  <p className={styles.set_text_responsible}>
                    Responsible Person
                  </p>
                  <Box className={styles.set_employee_tag_box}>
                    <Tag size="lg" variant="subtle">
                      <TagLeftIcon boxSize="12px" as={MdAdd} />
                      <TagLabel onClick={handleAddEmployee}>add </TagLabel>
                    </Tag>
                  </Box>
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
                      
                      <Icon
                        as={FaRegCalendarAlt}
                      />
                    </HStack>
                  </div>
                  <div className={styles.start_time_container}>
                    <p>End Time</p>
                    <HStack
                      onClick={handleEndCalendar}
                      className={styles.calendar_stack}
                    >
                      <p className={styles.set_date_calendar}>{endTime}</p>
                      <Icon
                        as={FaRegCalendarAlt}
                      />
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
                  <button className={styles.add_task_btn}>Add Task</button>
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
