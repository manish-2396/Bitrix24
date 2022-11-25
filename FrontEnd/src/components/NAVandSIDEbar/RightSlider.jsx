import React from "react";
import { GiTeamIdea, GiArcheryTarget } from "react-icons/gi";
import {
  AiOutlineFileProtect,
  AiFillFunnelPlot,
  AiOutlinePlus,
} from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { MdContacts, MdAndroid } from "react-icons/md";
import { FiAlignJustify } from "react-icons/fi";
import { ImDropbox } from "react-icons/im";
import { IoIosArrowDropdownCircle, IoMdSettings } from "react-icons/io";

import { BiSitemap } from "react-icons/bi"; 
import { useDisclosure, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Tooltip } from "@chakra-ui/react";
import SliderNavbar from "./SjiderNavbar";
const RightSlider = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div style={{ width: "3vw" }}>
      <div
        style={{
          width: "40%",
          margin: "auto",
          marginTop: "10px",
          marginBottom: "10px",
          cursor: "pointer",
        }}
      >
        <FiAlignJustify size="20px" onClick={onOpen} />
        <SliderNavbar onClose={onClose} isOpen={isOpen} />
      </div>
      <hr style={{ width: "10px", margin: "auto" }} />
      <div
        style={{
          marginTop: "20px",
          marginBottom: "40px",
          marginLeft: "0px",
        }}
      >
        <VStack spacing="20px">
          <GiTeamIdea size="20px" />
          <Link to="/stream">
            <AiOutlineFileProtect size="20px" />
          </Link>
          <AiFillFunnelPlot size="20px" />
          <Link to="/marketing">
            <GiArcheryTarget size="20px" />
          </Link>
          <Link to="/sites">
            <BsFillCartFill size="20px" />
          </Link>
          <Link to="/company">
            <MdContacts size="20px" />
          </Link>

          <BsFillCartFill size="20px" />

          <MdContacts size="20px" />
          <MdAndroid size="20px" />
          <ImDropbox size="20px" />
          <IoIosArrowDropdownCircle size="20px" />
        </VStack>
      </div>
      <div>
        <VStack spacing="15px">
          <BiSitemap size="15px" />
          <IoMdSettings size="15px" />
          <AiOutlinePlus />
        </VStack>
      </div>
    </div>
  );
};

export default RightSlider;
