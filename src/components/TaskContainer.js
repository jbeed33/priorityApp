import TaskCard from "./TaskCard";
import React from "react";

export default function TaskContainer(props) {
  return (
    <>
      <div className="flex flex-col">
        <h2 class="text-xl font-semibold text-gray-800 dark:text-white md:mt-0 w-full text-center mt-10 ">
          High Priority Tasks
        </h2>
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
