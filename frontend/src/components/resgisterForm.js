import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function RegisterForm() {
  const [registerInfo, setRegisterInfo] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
  });

  const [messageInfo, setMessageInfo] = useState({
    message: "",
  });

  function reroute() {
    console.log("Called reroute");
  }

  async function sumbitForm(e) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerInfo),
    };

    e.preventDefault();
    try {
      let result = await fetch("http://localhost:3010/user/signup", options);
      let data = await result.json();

      if (result.ok) {
        setMessageInfo({ message: data.msg, isError: false });
        reroute();
      }
    } catch (e) {
      setMessageInfo({ message: e, isError: true });
      console.log("error");
    }
  }

  function handleInput(e) {
    e.preventDefault();
    setRegisterInfo((prevRegisterInfo) => {
      let copyPrevRegisterInfo = prevRegisterInfo;
      copyPrevRegisterInfo[e.target.name] = e.target.value;
      return copyPrevRegisterInfo;
    });
  }

  return (
    <>
      <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <div className="bg-green-300 text-green-700 m-4 text-center">
          <h3>{messageInfo.message}</h3>
        </div>

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
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="text-gray-700 dark:text-gray-200" for="username">
                Email
              </label>
              <input
                id="email"
                type="text"
                name="email"
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
                type="text"
                name="password"
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
              Register User
            </Link>
          </div>
        </form>
      </section>
    </>
  );
}
