import "./addTaskForm.css";
import "../../utils/TaskUtils";
import { PriorityLevelOptions } from "../../utils/TaskUtils";
import { useEffect, useState } from "react";
export default function AddTaskForm(props) {
  let [data, setData] = useState({
    priority: "0",
    status: "0",
    title: "",
    details: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  async function submitForm(e) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "same-origin",
    };

    e.preventDefault();
    try {
      let result = await fetch("/api/task/create", options);
      let data = await result.json();
      console.log(data);

      if (!result.ok) {
        throw new Error("something went wrong.");
      }
    } catch (e) {
      console.log("error" + e);
    }
  }

  function changeValue(key, value) {
    let copyData = { ...data };
    copyData[key] = value.trim();

    if (copyData.priority == PriorityLevelOptions.HIGH) {
      if (copyData["lowToMediumDate"] !== undefined) {
        delete copyData["lowToMediumDate"];
      }

      if (copyData["mediumToHighDate"] !== undefined) {
        delete copyData["mediumToHighDate"];
      }
    }

    if (copyData.priority == PriorityLevelOptions.MEDIUM) {
      if (copyData["mediumToHighDate"] !== undefined) {
        delete copyData["mediumToHighDate"];
      }
    }
    setData(copyData);
  }

  return (
    <>
      <div id="form-backdrop"></div>
      <form className="form-div-add add-task-form">
        <h1>Add Tasks</h1>
        <button
          className="form-button"
          id="form-exit-button"
          onClick={() => props.setAddTaskDisplay((task) => !task)}
        >
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
        <div className="form-input">
          <label>Title</label>
          <input
            type="text"
            required
            onChange={(e) => changeValue("title", e.target.value)}
          ></input>
        </div>

        <div className="form-input">
          <label>Details </label>
          <textarea
            onChange={(e) => changeValue("details", e.target.value)}
          ></textarea>
        </div>

        {data.priority == PriorityLevelOptions.LOW ? (
          <div className="form-input">
            {" "}
            <label>Low to Medium </label>
            <input
              type="date"
              required
              onChange={(e) => changeValue("lowToMediumDate", e.target.value)}
            ></input>
          </div>
        ) : null}

        {data.priority >= PriorityLevelOptions.LOW &&
        data.priority <= PriorityLevelOptions.MEDIUM ? (
          <div className="form-input">
            <label>Medium to High </label>
            <input
              type="date"
              required
              onChange={(e) => changeValue("mediumToHighDate", e.target.value)}
            ></input>
          </div>
        ) : null}

        <button
          className="form-button"
          type="submit"
          onClick={(e) => submitForm(e)}
        >
          Add Task
        </button>
      </form>
    </>
  );
}
