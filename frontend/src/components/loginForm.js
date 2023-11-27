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
      <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        {messageInfo.isError ? (
          <div className="bg-red-300 text-red-700 m-4 text-center">
            <h3>{messageInfo.message}</h3>
          </div>
        ) : (
          <div className="bg-green-300 text-green-700 m-4 text-center">
            <h3>{messageInfo.message}</h3>
          </div>
        )}

        <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Login
        </h2>

        <form>
          <div>
            <div>
              <label class="text-gray-700 dark:text-gray-200" for="username">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                onChange={(e) => handleInput(e)}
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-gray-700 dark:text-gray-200" for="username">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                required
                onChange={(e) => handleInput(e)}
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div class="flex justify-evenly m-8">
            <button
              onClick={sumbitForm}
              className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Login
            </button>

            <Link
              className="hover:underline"
              onClick={() => props.displayLogin(false)}
            >
              Register User
            </Link>
          </div>
        </form>
      </section>
    </>
  );
}
