import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faCheck, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import "./card.css";

export default function Card() {
  return (
    <>
      <div id="card-container">
        <div id="card-header">
          <div id="card-title">Dinner</div>
          <div id="card-options">
            <button>
              <FontAwesomeIcon icon={faCheck} class="card-icon" />
            </button>
            <button>
              <FontAwesomeIcon icon={faEllipsis} class="card-icon" />
            </button>
          </div>
        </div>
        <p>This has some text. This has some text here.</p>
        <div id="card-details">
          <div className="card-status">
            <h3 className="card-status-title">Priority Lvl</h3>
            <h3 className="card-status-detail">High</h3>
          </div>
          <div className="card-status">
            <h3 className="card-status-title">Due Date</h3>
            <h3 className="card-status-detail">12/27/23</h3>
          </div>
        </div>
      </div>
    </>
  );
}
