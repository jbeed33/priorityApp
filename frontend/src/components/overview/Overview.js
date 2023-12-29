import OverviewFilter from "../overviewFilter/OverviewFIlter";
import Card from "../card/card";
import "./overview.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

export default function Overview() {
  return (
    <>
      <div id="overview-container">
        <div class="overview-cols cols-bg">
          {/* <OverviewFilter></OverviewFilter> */}
          <h1>Active Tasks</h1>
          <div id="filter-btn">
            <h2>Filter</h2>
            <FontAwesomeIcon icon={faFilter} />
          </div>

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
          <h1>This week</h1>
          <div>
            <Card></Card>
            <Card></Card>
          </div>
        </div>
        <div class="overview-cols cols-sm">
          <h1>Goals</h1>
        </div>
      </div>
    </>
  );
}
