import "./overviewFilter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMagnifyingGlass,
  faCaretDown,
  faChevronCircleDown,
} from "@fortawesome/free-solid-svg-icons";

export default function OverviewFilter() {
  return (
    <>
      <div id="overview-filter" className="drop-shadow-around">
        <div id="overview-filter-container">
          <div id="overview-filter-header">
            <div>
              <h1>Filter</h1>
            </div>
            <FontAwesomeIcon icon={faChevronCircleDown} />
          </div>
          <ul id="overview-filter-scrollable-container">
            <li>
              <button class="overview-filter-button">High</button>
            </li>
            <li>
              <button class="overview-filter-button">Medium</button>
            </li>
            <li>
              <button class="overview-filter-button">Low</button>
            </li>
            <li>
              <button class="overview-filter-button">None</button>
            </li>
            <li>
              <button class="overview-filter-button">Complete</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
