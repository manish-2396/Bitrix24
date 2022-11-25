import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/register.module.css";
import { useToast } from "@chakra-ui/react";

const initData = {
  email: "",
  password: "",
};

const Login = () => {
  const [userLogin, setUserLogin] = useState(initData);
  const [token, setToken] = useState({ msg: "", token: "" });
  const toast = useToast();
  const navigate = useNavigate();
  // console.log(userLogin);
  // console.log(token);
  const handleOnchange = (e) => {
    let { name, value } = e.target;
    setUserLogin({
      ...userLogin,
      [name]: value,
    });
  };

  const navigateHomepage = () => {
    navigate("/");
  };

  const handleOnClick = () => {
    console.log(userLogin)
    fetch("https://bitrix24.onrender.com/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userLogin),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setToken({ msg: res.msg, token: res.token })
      }).catch((err)=> console.log(err));
  };
  useEffect(()=>{
    if (token.msg === "Wrong Credentials") {
      toast({
        title: "Wrong Credentials.",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    }
    if (token.token) {
      toast({
        title: "Login Success.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      console.log(token.token);
      localStorage.setItem("token", token.token);
      navigate("/homepage");
    }
  },[token])

  return (
    <div>
      <div className={styles.register_container_main}>
        <div className={styles.btrix_poster_container}>
          <div className={styles.btrix_logo_div}>
            <img
              src="https://www.bitrix24.net/bitrix/templates/new/images/bitrix24-logo-en.svg"
              alt="btrix_logo"
            />
            <p
              onClick={navigateHomepage}
              className={styles.btrix_back_to_site_text}
            >
              back to site
            </p>
          </div>
          <div className={styles.btrix_text_container}>
            <h4 className={styles.btrix_text_set_main}>
              Your company.<br></br>United.
            </h4>
            <h6 className={styles.btrix_text_under}>Free.Unlimited.Online.</h6>
          </div>
        </div>
        <div className={styles.btrix_register_container}>
          <div className={styles.btrix_registration_text_div}>
            <h3>Bitrix Login</h3>
          </div>
          <div className={styles.btrix_email_password_container}>
            <p className={styles.btrix_email_password_text_set}>Enter email</p>
            <input
              onChange={handleOnchange}
              className={styles.btrix_input_field_set}
              type="text"
              name="email"
              value={userLogin.email}
            />
            <p className={styles.btrix_email_password_text_set}>
              Enter Password
            </p>
            <input
              onChange={handleOnchange}
              className={styles.btrix_input_field_set}
              type="password"
              name="password"
              value={userLogin.password}
            />
            {userLogin.email.includes("@") &&
            userLogin.email[0] != "@" &&
            userLogin.email[userLogin.email.length - 1] != "@" ? (
              <div className={styles.btrix_register_btn_div}>
                <button
                  onClick={handleOnClick}
                  className={styles.btrix_register_btn}
                >
                  Login
                </button>
              </div>
            ) : (
              <div className={styles.btrix_register_btn_div}>
                <button
                  disabled={true}
                  className={styles.btrix_register_btn_disabled}
                >
                  login
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
