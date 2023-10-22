import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/searchBar";
import Filter from "./components/Filter";
import TaskContainer from "./components/TaskContainer";
import TaskEditor from "./components/TaskEditor";
import TaskDisplay from "./components/TaskDisplay";
import { useState } from "react";

function App() {
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
            priority: "high",
            status: false,
            title: "Watering the lawn",
            details: "Description is watering the lawn",
            lowToMedDate: null,
            medToHighDate: null,
          },
          {
            id: 1,
            priority: "high",
            status: false,
            title: "Task 2",
            details: "Description is watering the lawn",
            lowToMedDate: null,
            medToHighDate: null,
          },
          {
            id: 2,
            priority: "high",
            status: false,
            title: "Task 3",
            details: "Description is watering the lawn",
            lowToMedDate: null,
            medToHighDate: null,
          },
        ],
      },
      med: { tasks: [] },
      lo: "low",
      no: "none",
    },
  ];

  //console.log(data);
  return (
    <>
      {openTaskDisplay ? (
        <TaskDisplay
          task={taskToDisplay}
          isTaskDisplayOpen={isOpenTaskDisplay}
        ></TaskDisplay>
      ) : null}

      {editTaskModal ? (
        <TaskEditor toggleTaskEditor={setEditTaskModal}></TaskEditor>
      ) : null}

      <SearchBar></SearchBar>
      <Filter></Filter>
      <TaskContainer
        toggleTaskEditor={setEditTaskModal}
        isTaskDisplayOpen={isOpenTaskDisplay}
        setTaskToDisplay={setTaskToDisplay}
        tasks={data[0].high.tasks}
      >
        {" "}
      </TaskContainer>
      <TaskContainer
        toggleTaskEditor={setEditTaskModal}
        isTaskDisplayOpen={isOpenTaskDisplay}
        tasks={data[0].med.tasks}
      >
        {" "}
      </TaskContainer>
    </>
  );
}

export default App;
