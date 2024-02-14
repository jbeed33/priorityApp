import "./overviewFilter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

export default function OverviewFilter(props) {
  return (
    <>
      <div id="form-backdrop"></div>
      <div id="overview-filter-container">
        <div id="overview-filter-header">
          <h1>Filter</h1>
          <button id="overview-filter-close-button">
            <FontAwesomeIcon
              onClick={(e) => {
                e.preventDefault();
                props.setFilterDisplay(false);
              }}
              icon={faXmarkCircle}
              className="fa-2x"
            />
          </button>
        </div>

        <ul id="overview-filter-options-container">
          <li>
            <button
              class="overview-filter-button"
              onClick={() => {
                props.setFilterOptions({ priority: 3 });
              }}
            >
              High
            </button>
          </li>
          <li>
            <button
              class="overview-filter-button"
              onClick={() => {
                props.setFilterOptions({ priority: 2 });
              }}
            >
              Medium
            </button>
          </li>
          <li>
            <button
              class="overview-filter-button"
              onClick={() => {
                props.setFilterOptions({ priority: 1 });
              }}
            >
              Low
            </button>
          </li>
          <li>
            <button
              class="overview-filter-button"
              onClick={() => {
                props.setFilterOptions({ priority: 0 });
              }}
            >
              None
            </button>
          </li>
          <li>
            <button
              class="overview-filter-button"
              onClick={() => {
                props.setFilterOptions({ status: 1 });
              }}
            >
              Complete
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
