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
      console.log(data);

      if (!result.ok) {
        throw new Error("something went wrong.");
      }

      setMessageInfo({ message: data.msg, isError: false });

      if (data.canRedirect) {
        console.log("Login redirect is called");
        navigate("/dashboard");
      }
    } catch (e) {
      setMessageInfo({ message: "Error occured: " + e, isError: true });
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
        <div className="bg-red-300 text-red-700 m-4 text-center">
          <h3>{messageInfo.message}</h3>
        </div>
      ) : (
        <div className="bg-green-300 text-green-700 m-4 text-center">
          <h3>{messageInfo.message}</h3>
        </div>
      )}
      <div className="form-div">
        <form>
          <h2 className="form-header">Login</h2>
          <div>
            <div>
              <label for="username">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                onChange={(e) => handleInput(e)}
              />
            </div>

            <div>
              <label for="username">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                required
                onChange={(e) => handleInput(e)}
              />
            </div>
          </div>

          <div class="flex justify-evenly m-8">
            <button onClick={sumbitForm}>Login</button>

            <Link
              className="hover:underline"
              onClick={() => props.displayLogin(false)}
            >
              Register User
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
