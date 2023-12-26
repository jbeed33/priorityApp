import { useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Overview from "../components/overview/Overview";
function Dashboard() {
  return (
    <>
      <Navbar></Navbar>
      <Overview></Overview>
    </>
  );
}

export default Dashboard;
