import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faCheck,
  faEllipsis,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./card.css";
import { changePriortyToName } from "../../utils/TaskUtils";

export default function Card(props) {
  console.log(props);
  function updateDashboard() {
    props.setDisplayInfo({
      title: props.title,
      details: props.details,
      priority: props.priority,
      id: props.id,
      lowToMediumDate: props.lowToMediumDate || null,
      mediumToHighDate: props.mediumToHighDate || null,
    });
    props.setEditTaskDisplay((editDisplay) => !editDisplay);
  }

  async function completeTask(e) {
    e.stopPropagation();
    const updatedSegment = { status: 1, taskId: props.id };
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedSegment),
      credentials: "same-origin",
    };

    try {
      let data = await fetch("/api/task/edit", options);
      let res = await data.json();
      console.log("Response", res);
      props.setAutoSync((sync) => !sync);
    } catch (e) {
      console.error("Something went wrong: ", e);
    }
  }

  async function deleteTask(e) {
    e.stopPropagation();
    const data = { taskId: props.id };
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "same-origin",
    };

    try {
      let data = await fetch("/api/task/delete", options);
      let res = await data.json();
      console.log("Response", res);
      props.setAutoSync((sync) => !sync);
    } catch (e) {
      console.error("Something went wrong: ", e);
    }
  }

  // console.log(props);
  return (
    <>
      <div
        id="card-container"
        className={`${props.status === 1 ? "complete" : ""} ${
          props.status === 1 ? "complete" : ""
        } `}
        onClick={updateDashboard}
      >
        <div id="card-header">
          <div id="card-title">{props.title}</div>
          <div id="card-options">
            <button>
              <FontAwesomeIcon
                onClick={(e) => completeTask(e)}
                icon={faCheck}
                class="card-icon"
              />
            </button>
            <button>
              <FontAwesomeIcon
                onClick={(e) => deleteTask(e)}
                icon={faXmarkCircle}
                class="card-icon"
              />
            </button>
          </div>
        </div>
        <p id="card-description">{props.details}</p>
        <div id="card-details">
          <div className="card-status">
            <h3 className="card-status-title">Priority Lvl</h3>
            <h3 className="card-status-detail">
              {changePriortyToName(props.priority)}
            </h3>
          </div>
          <div className="card-status">
            <h3 className="card-status-title">Upcoming Date</h3>
            <h3 className="card-status-detail">{props.dueDate}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
