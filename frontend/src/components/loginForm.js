import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function LoginForm() {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });

  function reroute() {
    console.log("Called reroute");
  }

  function sumbitForm(e) {
    e.preventDefault();
    console.log(e.target.value);
  }

  function handleInput(e) {
    e.preventDefault();
    setLoginInfo((prevLoginInfo) => {
      let copyprevLoginInfo = prevLoginInfo;
      copyprevLoginInfo[e.target.name] = e.target.value;
      return copyprevLoginInfo;
    });
  }

  return (
    <>
      <section class="  max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Login
        </h2>

        <form>
          <div class="flex flex-col">
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

          <div class="flex justify-evenly mr-8">
            <Link
              to="/dashboard"
              className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Login In
            </Link>

            <Link
              className="hover:underline"
              onClick={() => console.log("transiton to register form")}
            >
              Register User
            </Link>
          </div>
        </form>
      </section>
    </>
  );
}
