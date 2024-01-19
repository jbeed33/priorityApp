import OverviewFilter from "../overviewFilter/OverviewFIlter";
import Card from "../card/card";
import "./overview.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faAdd } from "@fortawesome/free-solid-svg-icons";
import ScheduleCard from "../scheduleCard/ScheduleCard";
import TaskCard from "../taskCard/TaskCard";
import { useEffect, useState } from "react";

export default function Overview(props) {
  const [taskData, setTaskData] = useState([]);
  const [filterDisplay, setFilterDisplay] = useState(false);
  const [filterOptions, setFilterOptions] = useState({ priority: 0 });

  async function fetchData() {
    try {
      let res = await fetch("/api/task/tasks");
      if (res.ok) {
        let data = await res.json();

        // setTaskData(() => data);
        setTaskData(() => filter(filterOptions, data));
        // console.log("dashboard data", data);
      }
      if (!res.ok) console.log("made it here");
    } catch (e) {
      console.log("Something went wrong when fetching tasks ", e);
    }
  }

  function filter(options, data) {
    let filteredData = [];
    for (const option in options) {
      filteredData = data.filter((task) => {
        if (task[option] === options[option]) {
          return task;
        }
      });
    }

    return filteredData;
  }

  useEffect(() => {
    fetchData();
  }, [filterOptions]);

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {filterDisplay === true ? (
        <OverviewFilter
          setFilterOptions={setFilterOptions}
          setFilterDisplay={setFilterDisplay}
        ></OverviewFilter>
      ) : null}

      <div id="overview-container">
        <div class="overview-cols cols-bg">
          <div id="filter-btn" onClick={() => setFilterDisplay(true)}>
            <h2>Filter</h2>
            <FontAwesomeIcon icon={faFilter} />
          </div>
          <h1>Tasks</h1>

          <button
            class="overview-button"
            onClick={() => props.setAddTaskDisplay((task) => !task)}
          >
            <FontAwesomeIcon icon={faAdd} />
            <h3>Add Task</h3>
          </button>

          {taskData.length == 0 ? (
            <h1>Please add a task</h1>
          ) : (
            <div id="overiew-display">
              {taskData.map((task) => {
                return (
                  <div class="overiew-display-col">
                    <Card
                      status={task.status}
                      id={task.taskId}
                      setDisplayInfo={props.setDisplayCardInfo}
                      setDisplayCard={props.setDisplayCard}
                      title={task.title}
                      details={task.details}
                      priority={task.priority}
                      dueDate={"1/12/23"}
                    ></Card>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        {/* <div class="overview-cols cols-sm">
          <h1>Due this week</h1>
          {taskData.length == 0 ? (
            <h1>No tasks this week</h1>
          ) : (
            <div id="overview-task-list-container">
              <ScheduleCard></ScheduleCard>
              <ScheduleCard></ScheduleCard>
              <ScheduleCard></ScheduleCard>
              <ScheduleCard></ScheduleCard>
            </div>
          )}
        </div> */}
        <div class="overview-cols cols-sm">
          <h1>Goals</h1>
          <button class="overview-button">
            <FontAwesomeIcon icon={faAdd} />
            <h3>Add Goal</h3>
          </button>
          <div id="overview-task-list-container">
            <TaskCard></TaskCard>
            <TaskCard></TaskCard>
            <TaskCard></TaskCard>
            <TaskCard></TaskCard>
            <TaskCard></TaskCard>
          </div>
        </div>
      </div>
    </>
  );
}
