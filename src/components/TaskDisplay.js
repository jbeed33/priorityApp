import React from "react";
import { format } from "date-fns";

export default function TaskDisplay(props) {
  let formattedLowToMedDate =
    props.task.lowToMedDate != null
      ? format(new Date(props.task.lowToMedDate), "MM/dd/yyyy")
      : " ";

  let formattedMedToHighDate =
    props.task.medToHighDate != null
      ? format(new Date(props.task.medToHighDate), "MM/dd/yyyy")
      : " ";

  return (
    <>
      <section className="absolute w-full my-auto  p-6 m-auto bg-white rounded-md shadow-md dark:bg-gray-800 z-10 ">
        <div className="flex justify-between">
          <h1 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
            {props.task.title}
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
            {props.task.status ? "Complete" : "Incomplete"}
          </button>
        </div>
        <div className="mt-4">
          <h3>
            Lo to Med:{" "}
            {props.task.lowToMedDate ? formattedLowToMedDate : "None"}
          </h3>
          <h3>
            Med to Hi:{" "}
            {props.task.medToHighDate ? formattedMedToHighDate : "None"}
          </h3>
        </div>

        <h2 className=" mt-4">Details: </h2>
        <p>{props.task.details}</p>
        <div className="flex justify-around ">
          <button
            onClick={() => props.toggleTaskEditor(true)}
            className=" mt-4 px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          >
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
