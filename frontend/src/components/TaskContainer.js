import TaskCard from "./TaskCard";
import React from "react";

export default function TaskContainer(props) {
  function changePriortyToName(priorityLevel) {
    if (priorityLevel === 3) return "High";
    if (priorityLevel === 2) return "Medium";
    if (priorityLevel === 1) return "Low";
    if (priorityLevel === 0) return "None";
  }

  console.log(props.tasks);

  return (
    <>
      <div className="flex flex-col">
        <div className="flex">
          {" "}
          <h2 class="text-xl font-semibold text-gray-800 dark:text-white md:mt-0 w-full text-center mt-10 ">
            {changePriortyToName(props.priority) + " Priority Tasks"}
          </h2>
          <button
            onClick={() => {
              props.setTaskToDisplay({
                id: 0, //The id should be a random UUID
                priority: props.priority,
                status: false,
                title: "",
                details: "",
                lowToMedDate: new Date(),
                medToHighDate: new Date(),
              });
              props.toggleTaskEditor(true);
            }}
            className=" w-8 leading-5 text-white text-xs transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          >
            Add task
          </button>
        </div>

        <div className="flex flex-col h-64  overflow-scroll w-11/12  m-auto ">
          {props.tasks?.length === 0 || props.tasks === null ? (
            <h1>No Tasks Found</h1>
          ) : (
            <div>
              {props.tasks.map((task) => {
                console.log(task);
                return (
                  <TaskCard
                    task={task}
                    setTaskToDisplay={props.setTaskToDisplay}
                    isTaskDisplayOpen={props.isTaskDisplayOpen}
                  ></TaskCard>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
