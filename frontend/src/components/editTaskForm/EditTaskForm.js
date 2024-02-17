import "./editTaskForm.css";
import "../../utils/TaskUtils";
import {
  PriorityLevelOptions,
  changeDateToFormatYearMonthDay,
} from "../../utils/TaskUtils";
import { useEffect, useState } from "react";

export default function EditTaskForm(props) {
  console.log("Edit task form props: ", props);

  let [data, setData] = useState({
    taskId: props.taskId,
    priority: "1",
    status: "0",
    title: props.title,
    details: props.details,
    lowToMediumDate: props.lowToMediumDate || new Date(),
    mediumToHighDate: props.mediumToHighDate || new Date(),
  });

  console.log("[edit task form] data: ", data);

  async function submitForm(e) {
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "same-origin",
    };

    e.preventDefault();
    try {
      let result = await fetch("/api/task/edit", options);
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
    console.log("Inside change Value function");
    let copyData = { ...data };
    console.log("Copy data: ", copyData);
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
      <form className="form-div-edit add-task-form">
        <h1>Edit Task</h1>
        <button
          className="form-button"
          id="form-exit-button"
          onClick={() => props.setEditTaskDisplay((task) => !task)}
        >
          {" "}
          X{" "}
        </button>
        <label>Level of Priority: </label>
        <select
          id="priority"
          name="priority"
          defaultValue={data.priority}
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
            defaultValue={data.title}
            required
            onChange={(e) => changeValue("title", e.target.value)}
          ></input>
        </div>

        <div className="form-input">
          <label>Details </label>
          <textarea
            defaultValue={data.details}
            onChange={(e) => changeValue("details", e.target.value)}
          ></textarea>
        </div>

        {data.priority <= PriorityLevelOptions.LOW ? (
          <div className="form-input">
            {" "}
            <label>Low to Medium </label>
            <input
              defaultValue={changeDateToFormatYearMonthDay(
                props.lowToMediumDate
              )}
              type="date"
              required
              onChange={(e) => changeValue("lowToMediumDate", e.target.value)}
            ></input>
          </div>
        ) : null}

        {data.priority <= PriorityLevelOptions.MEDIUM ? (
          <div className="form-input">
            <label>Medium to High </label>
            <input
              type="date"
              defaultValue={changeDateToFormatYearMonthDay(
                props.mediumToHighDate
              )}
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
          Update Task
        </button>
      </form>
    </>
  );
}
