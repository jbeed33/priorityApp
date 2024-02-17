import React from "react";
import "./displayCard.css";

export default function DisplayCard(props) {
  console.log("Display card props", props);
  return (
    <>
      <div id="display-card-backdrop"></div>
      <div id="display-card-container">
        <h1 id="display-card-title">{props.title}</h1>
        <h3 id="display-card-status">Low Priority</h3>
        <div id="display-card-date-container">
          <h5 id="display-card-date"> {`Low to Medium: ${"hi"}`}</h5>
          <h5>|</h5>
          <h5 id="display-card-title">Medium to High: 11/12/24</h5>
        </div>
        <h3>Details: </h3>
        <p id="display-card-description">{props.description}</p>
        <div id="display-card-button-container">
          <button
            className="display-card-button"
            onClick={() => props.setEditDisplay((editDisplay) => !editDisplay)}
          >
            Edit
          </button>
          <button
            className="display-card-button"
            onClick={() => props.setdisplayCard((display) => !display)}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}
