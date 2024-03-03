import "./overviewFilter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

export default function OverviewFilter(props) {
  function closeFilter() {
    props.setFilterDisplay(false);
  }
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
                closeFilter();
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
                props.setFilterOptions(null);
                closeFilter();
              }}
            >
              All
            </button>
          </li>
          <li>
            <button
              class="overview-filter-button"
              onClick={() => {
                props.setFilterOptions({ priority: 3 });
                closeFilter();
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
                closeFilter();
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
                closeFilter();
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
                closeFilter();
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
                closeFilter();
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
