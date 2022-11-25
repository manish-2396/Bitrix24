import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { GiTeamIdea, GiArcheryTarget } from "react-icons/gi";
import { AiOutlineFileProtect, AiFillFunnelPlot } from "react-icons/ai";
import { ImDropbox } from "react-icons/im";
import { IoIosArrowDropdownCircle, IoMdSettings } from "react-icons/io";
import { BsFillCartFill } from "react-icons/bs";
import { MdContacts, MdAndroid } from "react-icons/md";
import  "./RightSlider.module.css";
import { Link } from "react-router-dom";


const SjiderNavbar = ({ onClose, isOpen }) => {
   
     
  return (
    <div>
  <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent
          colorScheme="red"
          backgroundColor="rgb(0,45,102)"
          color="white"
        >
          <DrawerCloseButton />

          <DrawerBody>
            <div
              className="bitrixLogo"
              style={{ marginBottom: "10px", marginLeft: "0px" }}
            >
              <span className="logoSpan">Bitrix</span>
              <span className="logoSpan2">24</span>
            </div>
            <div style={{ lineHeight: "45px" }}>
              <div
                style={{
                  display: "flex",
                  gap: "13px",
                }}
                className="hovering"
              >
                <GiTeamIdea size="22px" style={{ marginTop: "10px" }} />
                <p>Collaboration</p>
              </div>
              <Link to="/stream">
                <div
                  style={{
                    display: "flex",
                    gap: "13px",
                  }}
                  className="hovering"
                >
                  <AiOutlineFileProtect
                    size="22px"
                    style={{ marginTop: "10px" }}
                  />
                  <p>Tasks and Projects</p>
                </div>
              </Link>

              <div
                style={{
                  display: "flex",
                  gap: "13px",
                }}
                className="hovering"
              >
                <AiFillFunnelPlot size="22px" style={{ marginTop: "10px" }} />
                <p>CRM</p>
              </div>
              <Link to="/marketing">
                <div
                  style={{
                    display: "flex",
                    gap: "13px",
                  }}
                  className="hovering"
                >
                  <GiArcheryTarget size="22px" style={{ marginTop: "10px" }} />
                  <p>Marketing</p>
                </div>
              </Link>

              <div
                style={{
                  display: "flex",
                  gap: "13px",
                }}
                className="hovering"
              >
                <BsFillCartFill size="22px" style={{ marginTop: "10px" }} />
                <p>Company</p>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "13px",
                }}
                className="hovering"
              >
                <MdContacts size="22px" style={{ marginTop: "10px" }} />
                <p>Sites and stores</p>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "13px",
                }}
                className="hovering"
              >
                <MdAndroid size="22px" style={{ marginTop: "10px" }} />
                <p>Automation</p>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "13px",
                }}
                className="hovering"
              >
                <ImDropbox size="22px" style={{ marginTop: "10px" }} />
                <p>Application</p>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "13px",
                }}
                className="hovering"
              >
                <IoIosArrowDropdownCircle
                  size="22px"
                  style={{ marginTop: "10px" }}
                />
                <p>More</p>
              </div>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default SjiderNavbar