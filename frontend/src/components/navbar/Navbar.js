import "./navbar.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  let navigate = useNavigate();

  async function signOut() {
    console.log("Sign out clicked");
    try {
      const options = { method: "POST", credentials: "same-origin" };
      let res = await fetch("/api/user/signout", options);
      let data = await res.json();

      if (res.ok) {
        console.log("Signing user out");
        navigate("/");
      }
    } catch (e) {
      console.log("Error occured when signing out: ", e);
    }
  }
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
            {/* <button>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <button>
              <FontAwesomeIcon icon={faEnvelope} />
            </button> */}
            <div id="profile">
              <img src="https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_640.jpg"></img>
              <ul id="profile-options">
                <li>
                  <button onClick={() => signOut()}>Sign out</button>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}
