import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cookies from "universal-cookie";

export default function RegisterForm(props) {
  const [registerInfo, setRegisterInfo] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
  });

  const [messageInfo, setMessageInfo] = useState({
    message: "",
    isError: false,
  });

  function reroute() {
    console.log("Called reroute");
  }

  function validInput() {
    let errorMessage = "";

    if (registerInfo.name.length === 0) {
      errorMessage += "Need to provide a name. \n";
      return false;
    }

    if (registerInfo.username.length === 0) {
      errorMessage += "Need to provide a username. \n";
      return false;
    }

    if (registerInfo.password.length === 0) {
      errorMessage += "Need to provide a password. \n";
      return false;
    }

    if (registerInfo.email.length === 0) {
      errorMessage += "Need to provide an email. \n";
      return false;
    }

    setMessageInfo({ message: errorMessage, isError: true });

    return true;
  }

  async function sumbitForm(e) {
    console.log(registerInfo);

    // if (validInput() === false) return;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerInfo),
      credentials: "same-origin",
    };

    e.preventDefault();
    try {
      let result = await fetch("/api/user/signup", options);
      let data = await result.json();

      console.log("Data ", data);

      if (!result.ok) {
        throw new Error("something went wrong.");
      }

      setMessageInfo({ message: data.msg, isError: false });
      // const cookie = new Cookies("authorization", data.token);
      // cookie.set("authorization", data.token);
      // console.log("Token", data.token);
      //reroute();
    } catch (e) {
      setMessageInfo({ message: "Error occured: " + e, isError: true });
      console.log("error");
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
        <div className="bg-red-300 text-red-700 m-4 text-center">
          <h3>{messageInfo.message}</h3>
        </div>
      ) : (
        <div className="bg-green-300 text-green-700 m-4 text-center">
          <h3>{messageInfo.message}</h3>
        </div>
      )}

      <form>
        <h2 className="form-header">Priority</h2>
        <h2 className="form-header-sub">Join us by signing up below!</h2>
        <div className="form-input">
          <input
            placeholder="Name"
            id="name"
            type="text"
            name="name"
            onChange={(e) => handleInput(e)}
            required
          />
        </div>

        <div className="form-input">
          <input
            className="form-input"
            placeholder="Email"
            id="email"
            type="email"
            name="email"
            required
            onChange={(e) => handleInput(e)}
          />
        </div>

        <div className="form-input">
          <input
            className="form-input"
            placeholder="Password"
            id="password"
            type="password"
            name="password"
            required
            onChange={(e) => handleInput(e)}
          />
        </div>

        <button className="form-button" onClick={sumbitForm}>
          Register
        </button>

        <h3>
          {" "}
          Already have an account?{" "}
          <Link className="form-link" onClick={() => props.displayLogin(true)}>
            Login
          </Link>
        </h3>
      </form>
    </>
  );
}
