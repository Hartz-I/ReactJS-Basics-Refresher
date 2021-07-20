import React from "react";
import "./UserOutput.css";

const UserOutput = (props) => {
  const style = {
    color: "white",
    backgroundColor: "#bf1948",
    border: "1px solid gray",
    padding: "5px",
    transform: "skew(-5deg)",
  };

  return (
    <div className="UserOutput">
      <p>This is {props.name}</p>
      <p>
        I work at <span style={style}>{props.work}</span>
      </p>
    </div>
  );
};

export default UserOutput;
