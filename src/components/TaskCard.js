import React from "react";

export default function TaskCard(props) {
  return (
    <>
      <div
        class="w-full max-w-md pl-4 mb-2  rounded-lg shadow-lg dark:bg-gray-800 h-20 bg-slate-400"
        onClick={() =>
          props.isTaskDisplayOpen((isTaskModalOpen) => !isTaskModalOpen)
        }
      >
        <div className="flex flex-row align-middle justify-between">
          <h2 class=" w-3/4 mt-2 text-lg  font-semibold text-gray-800 dark:text-white md:mt-0 whitespace-nowrap text-ellipsis">
            Watering plants For better...
          </h2>
          <button>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <p class=" text-xs text-gray-600 dark:text-gray-200 text-ellipsis h-24">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores
          deserunt ea doloremque natus
        </p>
      </div>
    </>
  );
}
