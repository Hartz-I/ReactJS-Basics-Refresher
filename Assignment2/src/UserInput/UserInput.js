import React from "react";
import "./UserInput.css";

const UserInput = (props) => {
  return (
    <div className="input-section">
      <input
        className="input"
        type="text"
        onChange={props.changed}
        value={props.value}
      ></input>
      <p className="textLen">Text Length: {props.textLen}</p>
    </div>
  );
};

export default UserInput;
