import OverviewFilter from "../overviewFilter/OverviewFIlter";
import "./overview.css";

export default function Overview() {
  return (
    <>
      <div id="overview-container">
        <div class="overview-cols cols-bg">
          <OverviewFilter></OverviewFilter>
          <div id="overiew-display">
            <div class="list list-col-width"></div>
            <div class="list list-col-width"></div>
          </div>
        </div>
        <div class="overview-cols cols-sm">
          <div class="overview-dropdown-menu"></div>
          <div class="list"></div>
        </div>
        <div class="overview-cols cols-sm">
          <div id="overview-goal-label"></div>
          <div class="list"></div>
        </div>
      </div>
    </>
  );
}
