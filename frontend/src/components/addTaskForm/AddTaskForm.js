import "./addTaskForm.css";
import "../../utils/TaskUtils";
import { PriorityLevelOptions } from "../../utils/TaskUtils";
import { useEffect, useState } from "react";
export default function AddTaskForm(props) {
  let [data, setData] = useState({
    priority: "1",
    status: "0",
    title: "",
    details: "",
    lowToMediumDate: null,
    mediumToHighDate: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  function submitForm(e) {
    e.preventDefault();
    console.log(data);
  }

  function changeValue(key, value) {
    let copyData = { ...data };
    copyData[key] = value.trim();
    setData(copyData);
  }

  return (
    <>
      <div id="form-backdrop"></div>
      <form id="add-task-form">
        <h1>Add Tasks</h1>
        <button onClick={() => props.setAddTaskDisplay((task) => !task)}>
          {" "}
          X{" "}
        </button>
        <label>Level of Priority: </label>
        <select
          id="priority"
          name="priority"
          onClick={(e) => changeValue("priority", e.target.value)}
          required
        >
          <option value="0">None</option>
          <option value="3">High</option>
          <option value="2">Medium</option>
          <option value="1">Low</option>
        </select>
        <div>
          <label>Title</label>
          <input
            type="text"
            required
            onChange={(e) => changeValue("title", e.target.value)}
          ></input>
        </div>

        <div>
          <label>Details </label>
          <textarea
            onChange={(e) => changeValue("details", e.target.value)}
          ></textarea>
        </div>

        {data.priority === PriorityLevelOptions.LOW ? (
          <div>
            {" "}
            <label>Low to Medium </label>
            <input
              type="date"
              required
              onChange={(e) => changeValue("lowToMediumDate", e.target.value)}
            ></input>
          </div>
        ) : null}

        {data.priority <= PriorityLevelOptions.MEDIUM ? (
          <div>
            <label>Medium to High </label>
            <input
              type="date"
              required
              onChange={(e) => changeValue("mediumToHighDate", e.target.value)}
            ></input>
          </div>
        ) : null}

        <button type="submit" onClick={(e) => submitForm(e)}>
          Add Task
        </button>
      </form>
    </>
  );
}
