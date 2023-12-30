import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEdit } from "@fortawesome/free-solid-svg-icons";
import "./taskCard.css";

export default function TaskCard() {
  return (
    <>
      <div id="card">
        <button>
          <FontAwesomeIcon icon={faCheck} class="card-icon" />
        </button>
        <p>30 push-ups</p>
      </div>
    </>
  );
}
