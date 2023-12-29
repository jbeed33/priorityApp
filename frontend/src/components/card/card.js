import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import "./card.css";

export default function Card() {
  return (
    <>
      <div id="card-container">
        <div id="card-header">
          <div id="card-title">Dinner</div>
          <div id="card-options">
            <FontAwesomeIcon icon={faEdit} style={{ color: "red" }} />
            <button>
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button>
              <FontAwesomeIcon icon={faEdit} />
            </button>
          </div>
        </div>
        <p>This has some text. This has some text here.</p>
        <div id="card-details">
          <div className="card-status">
            <h3 className="card-status-title">Status</h3>
            <h3 className="card-status-detail">Active</h3>
          </div>
          <div className="card-status">
            <h3 className="card-status-title">End Date</h3>
            <h3 className="card-status-detail">12/27/23</h3>
          </div>
        </div>
      </div>
    </>
  );
}
