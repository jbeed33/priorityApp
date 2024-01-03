import { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Overview from "../components/overview/Overview";
import AddTaskForm from "../components/addTaskForm/AddTaskForm";
function Dashboard() {
  let [addTaskDisplay, setAddTaskDisplay] = useState(false);

  return (
    <>
      <Navbar></Navbar>
      {addTaskDisplay ? (
        <AddTaskForm setAddTaskDisplay={setAddTaskDisplay}></AddTaskForm>
      ) : null}

      <Overview setAddTaskDisplay={setAddTaskDisplay}></Overview>
    </>
  );
}

export default Dashboard;
