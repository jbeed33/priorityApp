import TaskCard from "./TaskCard";

export default function TaskContainer() {
  return (
    <>
      <div className="flex flex-col">
        <h2 class="text-xl font-semibold text-gray-800 dark:text-white md:mt-0 w-full text-center mt-10 ">
          High Priority Tasks
        </h2>
        <div className="flex flex-col h-64  overflow-scroll w-11/12  m-auto ">
          <TaskCard></TaskCard>
          <TaskCard></TaskCard>
          <TaskCard></TaskCard>
          <TaskCard></TaskCard>
        </div>
      </div>

      <div className="flex flex-col">
        <h2 class="text-xl font-semibold text-gray-800 dark:text-white md:mt-0 w-full text-center mt-10 ">
          Medium Priority Tasks
        </h2>
        <div className="flex flex-col h-64  overflow-scroll w-11/12 border-2 m-auto ">
          <TaskCard></TaskCard>
          <TaskCard></TaskCard>
          <TaskCard></TaskCard>
          <TaskCard></TaskCard>
        </div>
      </div>
    </>
  );
}
