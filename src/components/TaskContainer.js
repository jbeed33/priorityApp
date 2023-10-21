import TaskCard from "./TaskCard";
import React from "react";

export default function TaskContainer(props) {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex">
          {" "}
          <h2 class="text-xl font-semibold text-gray-800 dark:text-white md:mt-0 w-full text-center mt-10 ">
            High Priority Tasks
          </h2>
          <button
            onClick={() => {
              props.toggleTaskEditor(true);
            }}
            className=" mt-4 px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          >
            Add task
          </button>
        </div>

        <div className="flex flex-col h-64  overflow-scroll w-11/12  m-auto ">
          <TaskCard isTaskDisplayOpen={props.isTaskDisplayOpen}></TaskCard>
          <TaskCard isTaskDisplayOpen={props.isTaskDisplayOpen}></TaskCard>
          <TaskCard isTaskDisplayOpen={props.isTaskDisplayOpen}></TaskCard>
          <TaskCard isTaskDisplayOpen={props.isTaskDisplayOpen}></TaskCard>
        </div>
      </div>
    </>
  );
}
