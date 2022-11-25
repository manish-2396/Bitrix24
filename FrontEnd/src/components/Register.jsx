import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/register.module.css";

const initData = {
  email: "",
  password: "",
};

const Register = () => {
  const [userSignup, setUserSignup] = useState(initData);
  const [userPresent, setUserPresent] = useState({ msg: "", present: false });
  console.log(userPresent);
  const navigate = useNavigate();

  const handleOnchange = (e) => {
    let { name, value } = e.target;
    setUserSignup({
      ...userSignup,
      [name]: value,
    });
  };

  const navigateHomepage = () => {
    navigate("/homepage");
  };

  const handleOnClick = () => {
    fetch("https://bitrix24.onrender.com/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userSignup),
    })
      .then((res) => res.json())
      .then((res) => setUserPresent({ msg: res.msg, present: res.signup }));
  };
  console.log(userSignup);
  useEffect(() => {
    if (userPresent.present) {
      navigate("/login");
    }
  }, [userPresent]);
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
            <h3>Bitrix Registration</h3>
          </div>
          <div className={styles.btrix_email_password_container}>
            <p className={styles.btrix_email_password_text_set}>Enter email</p>
            <input
              onChange={handleOnchange}
              className={styles.btrix_input_field_set}
              type="text"
              name="email"
              value={userSignup.email}
            />
            <p className={styles.btrix_email_password_text_set}>
              Enter Password
            </p>
            <input
              onChange={handleOnchange}
              className={styles.btrix_input_field_set}
              type="password"
              name="password"
              value={userSignup.password}
            />
            {userPresent.msg == "User already Exists" &&
            userSignup.email != "" ? (
              <div className={styles.set_err_msg}>
                <p className={styles.set_err_text}>
                  Existing User ! try logging in{" "}
                </p>
                <button
                  onClick={() => {
                    navigate("/login");
                  }}
                  className={styles.btrix_register_btn}
                  style={{ marginTop: "-3px" }}
                >
                  {" "}
                  Login
                </button>
              </div>
            ) : null}
            {userSignup.email.includes("@") &&
            userSignup.email[0] != "@" &&
            userSignup.email[userSignup.email.length - 1] != "@" ? (
              <div className={styles.btrix_register_btn_div}>
                <button
                  onClick={handleOnClick}
                  className={styles.btrix_register_btn}
                >
                  register for free
                </button>
              </div>
            ) : (
              <div className={styles.btrix_register_btn_div}>
                <button
                  disabled={true}
                  onClick={handleOnClick}
                  className={styles.btrix_register_btn_disabled}
                >
                  register for free
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
