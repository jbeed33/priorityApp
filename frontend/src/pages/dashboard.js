import { useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Overview from "../components/overview/Overview";
import AddTaskForm from "../components/addTaskForm/AddTaskForm";
function Dashboard() {
  return (
    <>
      <Navbar></Navbar>
      <AddTaskForm></AddTaskForm>
      <Overview></Overview>
    </>
  );
}

export default Dashboard;
