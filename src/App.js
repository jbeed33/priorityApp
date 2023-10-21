import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/searchBar";
import Filter from "./components/Filter";
import TaskContainer from "./components/TaskContainer";
import TaskEditor from "./components/TaskEditor";
import TaskDisplay from "./components/TaskDisplay";

function App() {
  return (
    <>
      <TaskDisplay></TaskDisplay>
      <SearchBar></SearchBar>
      <Filter></Filter>
      <TaskContainer></TaskContainer>
    </>
  );
}

export default App;
