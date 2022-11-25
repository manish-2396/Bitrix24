import React from "react";
import  "./RightSlider.module.css";
import { ArrowLeftIcon } from '@chakra-ui/icons'                     
import styled from "styled-components";
import Clock from "react-live-clock";
import { Avatar, Select } from "@chakra-ui/react";
const Input = styled.input`
  background-color: rgb(47, 66, 104);
  width: 180px;
  height: 35px;
  box-sizing: border-box;
  border-radius: 15px;
  font-size: 16px;
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
  &:focus {
    outline: none;
    width:100%;
    background-color:#0053aa;
}
  }
`;

const NavBar = () => {
  const user = localStorage.getItem("email");
               
  return (
    <>
      <div style={{display:"flex", height:"5rem", justifyContent: "space-evenly", alignItems:"center" }}>
        {/* bitrixLogo */}
        <div style={{fontSize:"35px", fontWeight:"bolder"}}>
          <span style={{color:"Black", margin:"5px"}}>Bitrix</span>
          <span style={{color:"#0053aa", margin:"5px"}} >24</span>
        </div>
        {/* search box */}
        <div  >
        <Input type="text" name="search" placeholder="Search.."></Input>
        </div>
        {/* realtime */}
        <div style={{fontSize:"30px", border:"1px solid black", borderRadius:"20px", width:"10%"}}>
        <Clock ticking={true} timezone={"Asia/Calcutta"} interval={1000} />
        </div>
        {/* icon Account */}
        <div  >
          <div style={{ paddingLeft: "10px", paddingTop: "5px" }}>
            <Avatar size="sm" src="https://bit.ly/broken-link" /><span>{user} </span>
          </div>
        </div>
        {/* logout */}
        <div>
          
          <button onClick={() => sayHello()}>LogOut <span > <ArrowLeftIcon/> </span></button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
