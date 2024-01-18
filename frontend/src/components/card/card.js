import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faCheck, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import "./card.css";

export default function Card(props) {
  function updateDashboard() {
    props.setDisplayInfo({
      title: props.title,
      details: props.details,
      priority: props.priority,
      id: props.id,
    });
    props.setDisplayCard(true);
  }
  console.log(props);
  return (
    <>
      <div id="card-container" onClick={updateDashboard}>
        <div id="card-header">
          <div id="card-title">{props.title}</div>
          <div id="card-options">
            <button>
              <FontAwesomeIcon icon={faCheck} class="card-icon" />
            </button>
            <button>
              <FontAwesomeIcon icon={faEllipsis} class="card-icon" />
            </button>
          </div>
        </div>
        <p id="card-description">{props.details}</p>
        <div id="card-details">
          <div className="card-status">
            <h3 className="card-status-title">Priority Lvl</h3>
            <h3 className="card-status-detail">{props.priority}</h3>
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
