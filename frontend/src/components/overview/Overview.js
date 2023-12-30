import OverviewFilter from "../overviewFilter/OverviewFIlter";
import Card from "../card/card";
import "./overview.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faAdd } from "@fortawesome/free-solid-svg-icons";
import ScheduleCard from "../scheduleCard/ScheduleCard";
import TaskCard from "../taskCard/TaskCard";

export default function Overview() {
  return (
    <>
      <div id="overview-container">
        <div class="overview-cols cols-bg">
          <div id="filter-btn">
            <h2>Filter</h2>
            <FontAwesomeIcon icon={faFilter} />
          </div>
          <h1>Tasks</h1>

          <button class="overview-button">
            <FontAwesomeIcon icon={faAdd} />
            <h3>Add Task</h3>
          </button>

          <div id="overiew-display">
            <div>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
            </div>

            <div>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
            </div>
          </div>
        </div>
        <div class="overview-cols cols-sm">
          <h1>Due this week</h1>
          <div id="overview-task-list-container">
            <ScheduleCard></ScheduleCard>
            <ScheduleCard></ScheduleCard>
            <ScheduleCard></ScheduleCard>
            <ScheduleCard></ScheduleCard>
          </div>
        </div>
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
            <TaskCard></TaskCard>
            <TaskCard></TaskCard>
            <TaskCard></TaskCard>
            <TaskCard></TaskCard>
            <TaskCard></TaskCard>
            <TaskCard></TaskCard>
            <TaskCard></TaskCard>
            <TaskCard></TaskCard>
            <TaskCard></TaskCard>
            <TaskCard></TaskCard>
            <TaskCard></TaskCard>
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
