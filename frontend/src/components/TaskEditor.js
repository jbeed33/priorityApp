import React from "react";
import { useState } from "react";
import { format } from "date-fns";

//Note: When submitting (When saved is pressed) the date might need to be converted back into miliseconds :)
export default function TaskEditor(props) {
  const [taskToAdd, setTaskToAdd] = useState({
    priority: 0,
    status: 1,
    title: "",
    details: "",
    lowToMediumDate: new Date(),
    mediumToHighDate: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  let formattedLowToMedDate =
    props.task.lowToMedDate != null
      ? format(new Date(props.task.lowToMedDate), "yyyy-MM-dd")
      : " ";

  let formattedMedToHighDate =
    props.task.medToHighDate != null
      ? format(new Date(props.task.medToHighDate), "yyyy-MM-dd")
      : " ";

  function handleInput(e) {
    e.preventDefault();
    setTaskToAdd((prevTaskToAdd) => {
      let copyTaskToAdd = prevTaskToAdd;
      console.log("title", e.target.value);
      copyTaskToAdd[e.target.name] = e.target.value.trim();
      return copyTaskToAdd;
    });
  }

  // async function submit(){
  //   let tasktoSend ={

  //   }

  //   let options = {
  //     method: "POST",
  //     header: {
  //       "Content-Type": "application/json"
  //     }
  //     body:
  //   }
  //   let res = await fetch("/api/task/create")
  // }

  return (
    <>
      <section className="absolute w-full my-auto  p-6 m-auto bg-white rounded-md shadow-md dark:bg-gray-800 z-10 ">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
            Add Task
          </h2>
          <button
            class="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            onClick={() => props.toggleTaskEditor(false)}
          >
            X
          </button>
        </div>

        <form>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                for="username"
              >
                Title
              </label>
              <input
                id="title"
                type="text"
                name="title"
                onChange={(e) => handleInput(e)}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200" for="details">
                Details
              </label>
              <textarea
                id="details"
                type="details"
                name="details"
                onChange={(e) => handleInput(e)}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              ></textarea>
            </div>
          </div>

          <div className="mt-5">
            <label className="text-gray-700 dark:text-gray-200" for="username">
              Switch task proiority from Low to Med on:
            </label>
            <input
              id="LowToMed"
              type="date"
              name="lowToMediumDate"
              defaultValue={formattedLowToMedDate}
              onChange={(e) => handleInput(e)}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div className="mt-5">
            <label className="text-gray-700 dark:text-gray-200" for="username">
              Switch task proiority from Med to HI on:
            </label>
            <input
              id="MedToHi"
              type="date"
              name="mediumToHighDate"
              defaultValue={formattedMedToHighDate}
              onChange={(e) => handleInput(e)}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div className="flex justify-end mt-6">
            <button
              className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              onClick={(e) => {
                e.preventDefault();
                console.log(taskToAdd);
              }}
            >
              Save
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
