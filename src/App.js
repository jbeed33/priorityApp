import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/searchBar";
import Filter from "./components/Filter";
import TaskContainer from "./components/TaskContainer";
import TaskEditor from "./components/TaskEditor";
import TaskDisplay from "./components/TaskDisplay";
import { useState } from "react";

function App() {
  const [openTaskDisplay, isOpenTaskDisplay] = useState(true);
  return (
    <>
      {openTaskDisplay ? (
        <TaskDisplay isTaskDisplayOpen={isOpenTaskDisplay}></TaskDisplay>
      ) : null}

      <SearchBar></SearchBar>
      <Filter></Filter>
      <TaskContainer isTaskDisplayOpen={isOpenTaskDisplay}> </TaskContainer>
    </>
  );
}

export default App;
