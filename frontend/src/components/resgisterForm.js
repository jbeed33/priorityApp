import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cookies from "universal-cookie";

export default function RegisterForm() {
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

    if (validInput() === false) return;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerInfo),
    };

    e.preventDefault();
    try {
      let result = await fetch("/api/user/signup", options);
      let data = await result.json();

      if (!result.ok) {
        throw new Error("something went wrong.");
      }

      setMessageInfo({ message: data.msg, isError: false });
      // const cookie = new Cookies("authorization", data.token);
      // cookie.set("authorization", data.token);
      // console.log("Token", data.token);
      reroute();
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
          Register
        </h2>

        <form>
          <div class="flex flex-col">
            <div>
              <label class="text-gray-700 dark:text-gray-200" for="username">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                onChange={(e) => handleInput(e)}
                required
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
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
                Username
              </label>
              <input
                id="username"
                type="text"
                name="username"
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
              Register
            </button>

            <Link
              className="hover:underline"
              onClick={() => console.log("transiton to login form")}
            >
              Login User
            </Link>
          </div>
        </form>
      </section>
    </>
  );
}
