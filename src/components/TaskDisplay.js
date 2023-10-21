import React from "react";

export default function TaskDisplay(props) {
  return (
    <>
      <section className="absolute w-full my-auto  p-6 m-auto bg-white rounded-md shadow-md dark:bg-gray-800 z-10 ">
        <div className="flex justify-between">
          <h1 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
            Feed the dog before leaving.
          </h1>
          <button
            onClick={() =>
              props.isTaskDisplayOpen((isTaskModalOpen) => !isTaskModalOpen)
            }
            class="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            X
          </button>
        </div>
        <div className="flex ">
          <button class=" mt-4 p-1 font-medium tracking-wide text-white text-xs capitalize transition-colors duration-300 transform bg-red-600 rounded-lg hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-80">
            Incomplete
          </button>
        </div>
        <div className="mt-4">
          <h3>Lo to Med: 10/22/23</h3>
          <h3>Med to Hi: 11/1/23</h3>
        </div>

        <h2 className=" mt-4">Details: </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <div className="flex justify-around ">
          <button className=" mt-4 px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            Edit
          </button>
          <button className=" mt-4 px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
            Complete
          </button>
        </div>
      </section>
    </>
  );
}