import { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Overview from "../components/overview/Overview";
import AddTaskForm from "../components/addTaskForm/AddTaskForm";
import DisplayCard from "../components/displayCard.js/DisplayCard";
import EditTaskForm from "../components/editTaskForm/EditTaskForm";
function Dashboard() {
  const [addTaskDisplay, setAddTaskDisplay] = useState(false);
  const [editTaskDisplay, setEditTaskDisplay] = useState(false);
  const [displayCardDisplay, setDisplayCardDisplay] = useState(false);
  const [displayCardInfo, setDisplayCardInfo] = useState({
    title: "",
    details: "",
  });

  return (
    <>
      <Navbar></Navbar>
      {addTaskDisplay ? (
        <AddTaskForm setAddTaskDisplay={setAddTaskDisplay}></AddTaskForm>
      ) : null}
      {editTaskDisplay ? (
        <EditTaskForm
          setEditTaskDisplay={setEditTaskDisplay}
          title={"test title"}
          details={"test description"}
          lowToMediumDate={"11/12/24"}
          mediumToHighDate={"11/12/24"}
        ></EditTaskForm>
      ) : null}

      {displayCardDisplay ? (
        <DisplayCard
          title={displayCardInfo.title}
          description={displayCardInfo.details}
          setdisplayCard={setDisplayCardDisplay}
          setEditDisplay={setEditTaskDisplay}
        ></DisplayCard>
      ) : null}

      <Overview
        setAddTaskDisplay={setAddTaskDisplay}
        setDisplayCardInfo={setDisplayCardInfo}
        setDisplayCard={setDisplayCardDisplay}
        setEditTaskDisplay={setEditTaskDisplay}
      ></Overview>
    </>
  );
}

export default Dashboard;
