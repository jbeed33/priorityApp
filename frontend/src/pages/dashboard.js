import SearchBar from "../components/searchBar";
import Filter from "../components/Filter";
import TaskContainer from "../components/TaskContainer";
import TaskEditor from "../components/TaskEditor";
import TaskDisplay from "../components/TaskDisplay";
import { useEffect, useState } from "react";
import { PriorityLevelOptions } from "../utils/TaskUtils";

function Dashboard() {
  const [openTaskDisplay, isOpenTaskDisplay] = useState(false);
  const [editTaskModal, setEditTaskModal] = useState(false);
  const [taskToDisplay, setTaskToDisplay] = useState(null);
  const [userData, setUserData] = useState(null);

  console.log(taskToDisplay);

  async function fetchAllTasks() {
    try {
      const res = await fetch("/api/task/tasks");
      const data = await res.json();
      setUserData(data);
      console.log("data to display: ", data[0]);
    } catch (e) {
      console.log("Error Use Effect", e);
    }
  }
  useEffect(() => {
    try {
      fetchAllTasks();
    } catch (e) {
      console.error("Error occured in Dashboard use effect: ", e);
    }
  }, []);

  return (
    <>
      {/* <h1>
        {userData.length == 0
          ? "hello world"
          : userData.map((user) => {
              return user.title + "\n";
            })}
      </h1> */}
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
        tasks={userData === null ? null : userData[0]}
        priority={0}
      ></TaskContainer>
      <TaskContainer
        toggleTaskEditor={setEditTaskModal}
        isTaskDisplayOpen={isOpenTaskDisplay}
        setTaskToDisplay={setTaskToDisplay}
        tasks={userData === null ? null : userData[1]}
        priority={2}
      ></TaskContainer>
      <TaskContainer
        toggleTaskEditor={setEditTaskModal}
        isTaskDisplayOpen={isOpenTaskDisplay}
        setTaskToDisplay={setTaskToDisplay}
        tasks={userData === null ? null : userData[2]}
        priority={0}
      >
        {" "}
      </TaskContainer>
    </>
  );
}

export default Dashboard;
