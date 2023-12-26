import "./navbar.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <>
      <div id="main-container">
        <header>
          <div>
            <h1 id="title">Priority!</h1>
            <p id="sub-title">Here's an overview of your schedule</p>
          </div>
          <nav>
            {/* <div id="slider"></div>
            <div id="search"></div> */}
            <button>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <button>
              <FontAwesomeIcon icon={faEnvelope} />
            </button>
            <div id="profile">
              <img src="https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_640.jpg"></img>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}
