import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/searchBar";
import Filter from "./components/Filter";
import TaskContainer from "./components/TaskContainer";
import TaskEditor from "./components/TaskEditor";

function App() {
  return (
    <>
      <TaskEditor></TaskEditor>
      <SearchBar></SearchBar>
      <Filter></Filter>
      <TaskContainer></TaskContainer>
    </>
  );
}

export default App;
