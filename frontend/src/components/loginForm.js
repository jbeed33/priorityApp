import React from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginForm(props) {
  let navigate = useNavigate();
  const [loginInfo, setRegisterInfo] = useState({
    email: "",
    password: "",
  });

  const [messageInfo, setMessageInfo] = useState({
    message: "",
    isError: false,
  });

  function validInput() {
    let errorMessage = "";

    if (loginInfo.password.length === 0) {
      errorMessage += "Need to provide a password. \n";
      return false;
    }

    if (loginInfo.email.length === 0) {
      errorMessage += "Need to provide an email. \n";
      return false;
    }

    setMessageInfo({ message: errorMessage, isError: true });

    return true;
  }

  async function sumbitForm(e) {
    console.log(loginInfo);

    if (validInput() === false) return;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    };

    e.preventDefault();
    try {
      let result = await fetch("/api/user/login", options);
      let data = await result.json();
      console.log("Data login form: ", data);

      if (!result.ok) {
        throw new Error("something went wrong.");
      }

      setMessageInfo({ message: data.msg, isError: false });

      if (data.canRedirect) {
        console.log("Login redirect is called");
        navigate("/dashboard");
      }
    } catch (e) {
      setMessageInfo({ message: "An error occured. Please try again later. " });
      console.log("error" + e);
    }
  }

  function handleInput(e) {
    e.preventDefault();
    setRegisterInfo((prevRegisterInfo) => {
      let copyPrevRegisterInfo = prevRegisterInfo;
      copyPrevRegisterInfo[e.target.name] = e.target.value.trim();
      return copyPrevRegisterInfo;
    });
  }

  return (
    <>
      {messageInfo.isError ? (
        <div class="login-error-msg">
          <h3>{messageInfo.message}</h3>
        </div>
      ) : (
        <div class="login-error-msg">
          <h3>{messageInfo.message}</h3>
        </div>
      )}
      <div className="form-div">
        <form>
          <h2 className="form-header">Priority</h2>
          <h2 className="form-header-sub">Welcome back!</h2>

          <div className="form-input">
            {/* <label for="username" className="form-label">
                Email
              </label> */}
            <input
              placeholder="Email"
              id="email"
              type="email"
              name="email"
              required
              onChange={(e) => handleInput(e)}
            />
          </div>

          <div className="form-input">
            {/* <label for="username">Password</label> */}
            <input
              placeholder="password"
              id="password"
              type="password"
              name="password"
              required
              onChange={(e) => handleInput(e)}
            />
          </div>

          <button className="form-button login-btn" onClick={sumbitForm}>
            Login
          </button>
          <h3>
            Dont't have an account?{" "}
            <Link
              className="form-link"
              onClick={() => props.displayLogin(false)}
            >
              Sign Up
            </Link>{" "}
          </h3>
        </form>
      </div>
    </>
  );
}
