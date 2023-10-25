import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/searchBar";
import Filter from "./components/Filter";
import TaskContainer from "./components/TaskContainer";
import TaskEditor from "./components/TaskEditor";
import TaskDisplay from "./components/TaskDisplay";
import { useState } from "react";

function App() {
  const PriorityLevelOptions = {
    HIGH: 3,
    MED: 2,
    LOW: 1,
    NONE: 0,
  };

  const [openTaskDisplay, isOpenTaskDisplay] = useState(false);
  const [editTaskModal, setEditTaskModal] = useState(false);
  const [taskToDisplay, setTaskToDisplay] = useState(null);

  console.log(taskToDisplay);

  let data = [
    {
      high: {
        tasks: [
          {
            id: 0, //The id should be a random UUID
            priority: 3,
            status: false,
            title: "Watering the lawn",
            details: "Description is watering the lawn",
            lowToMedDate: new Date().getTime(),
            medToHighDate: new Date().getTime(),
          },
          {
            id: 1,
            priority: 3,
            status: false,
            title: "Task 2",
            details: "Description is watering the lawn",
            lowToMedDate: null,
            medToHighDate: null,
          },
          {
            id: 2,
            priority: 3,
            status: false,
            title: "Task 3",
            details: "Description is watering the lawn",
            lowToMedDate: null,
            medToHighDate: null,
          },
        ],
      },
      med: {
        tasks: [
          {
            id: 0, //The id should be a random UUID
            priority: 2,
            status: false,
            title: "Watering the lawn",
            details: "Description is watering the lawn",
            lowToMedDate: new Date().getTime(),
            medToHighDate: new Date().getTime(),
          },
          {
            id: 1,
            priority: 2,
            status: false,
            title: "Task 2",
            details: "Description is watering the lawn",
            lowToMedDate: null,
            medToHighDate: null,
          },
          {
            id: 2,
            priority: 2,
            status: false,
            title: "Task 3",
            details: "Description is watering the lawn",
            lowToMedDate: null,
            medToHighDate: null,
          },
        ],
      },
      low: { tasks: [] },
      none: { tasks: [] },
    },
  ];

  console.log(data[0].high.lowToMedDate);
  return (
    <>
      {openTaskDisplay ? (
        <TaskDisplay
          task={taskToDisplay}
          isTaskDisplayOpen={isOpenTaskDisplay}
          toggleTaskEditor={setEditTaskModal}
        ></TaskDisplay>
      ) : null}

      {editTaskModal ? (
        <TaskEditor
          toggleTaskEditor={setEditTaskModal}
          task={taskToDisplay}
        ></TaskEditor>
      ) : null}

      <SearchBar></SearchBar>
      <Filter></Filter>
      <TaskContainer
        toggleTaskEditor={setEditTaskModal}
        isTaskDisplayOpen={isOpenTaskDisplay}
        setTaskToDisplay={setTaskToDisplay}
        tasks={data[0].high.tasks}
        priority={PriorityLevelOptions.HIGH}
      >
        {" "}
      </TaskContainer>
      <TaskContainer
        toggleTaskEditor={setEditTaskModal}
        isTaskDisplayOpen={isOpenTaskDisplay}
        setTaskToDisplay={setTaskToDisplay}
        tasks={data[0].med.tasks}
        priority={PriorityLevelOptions.MED}
      >
        {" "}
      </TaskContainer>
      <TaskContainer
        toggleTaskEditor={setEditTaskModal}
        isTaskDisplayOpen={isOpenTaskDisplay}
        setTaskToDisplay={setTaskToDisplay}
        tasks={data[0].low.tasks}
        priority={PriorityLevelOptions.LOW}
      >
        {" "}
      </TaskContainer>
    </>
  );
}

export default App;
