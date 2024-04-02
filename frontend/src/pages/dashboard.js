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
  const [autoSync, setAutoSync] = useState(false);

  return (
    <>
      <Navbar></Navbar>
      {addTaskDisplay ? (
        <AddTaskForm
          setAddTaskDisplay={setAddTaskDisplay}
          setAutoSync={setAutoSync}
        ></AddTaskForm>
      ) : null}
      {editTaskDisplay ? (
        <EditTaskForm
          taskId={displayCardInfo.id}
          priority={displayCardInfo.priority}
          setEditTaskDisplay={setEditTaskDisplay}
          title={displayCardInfo.title}
          details={displayCardInfo.details}
          lowToMediumDate={displayCardInfo.lowToMediumDate}
          mediumToHighDate={displayCardInfo.mediumToHighDate}
          setAutoSync={setAutoSync}
        ></EditTaskForm>
      ) : null}

      {/* {displayCardDisplay ? (
        <DisplayCard
          title={displayCardInfo.title}
          description={displayCardInfo.details}
          setdisplayCard={setDisplayCardDisplay}
          setEditDisplay={setEditTaskDisplay}
        ></DisplayCard>
      ) : null} */}

      <Overview
        setAddTaskDisplay={setAddTaskDisplay}
        setDisplayCardInfo={setDisplayCardInfo}
        setDisplayCard={setDisplayCardDisplay}
        setEditTaskDisplay={setEditTaskDisplay}
        setAutoSync={setAutoSync}
        autoSync={autoSync}
      ></Overview>
    </>
  );
}

export default Dashboard;
