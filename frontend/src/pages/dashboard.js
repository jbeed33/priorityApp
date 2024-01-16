import { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Overview from "../components/overview/Overview";
import AddTaskForm from "../components/addTaskForm/AddTaskForm";
import DisplayCard from "../components/displayCard.js/DisplayCard";
function Dashboard() {
  const [addTaskDisplay, setAddTaskDisplay] = useState(false);
  const [displayCardDisplay, setDisplayCardDisplay] = useState(true);
  const [displayCardInfo, setDisplayCardInfo] = useState({
    title: "",
    details: "",
  });
  console.log("Card display", displayCardDisplay);

  return (
    <>
      <Navbar></Navbar>
      {addTaskDisplay ? (
        <AddTaskForm setAddTaskDisplay={setAddTaskDisplay}></AddTaskForm>
      ) : null}

      {displayCardDisplay ? (
        <DisplayCard
          title={displayCardInfo.title}
          description={displayCardInfo.details}
          setdisplayCard={setDisplayCardDisplay}
        ></DisplayCard>
      ) : null}

      <Overview
        setAddTaskDisplay={setAddTaskDisplay}
        setDisplayCardInfo={setDisplayCardInfo}
        setDisplayCard={setDisplayCardDisplay}
      ></Overview>
    </>
  );
}

export default Dashboard;
