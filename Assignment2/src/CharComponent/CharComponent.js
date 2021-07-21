import React from "react";
import "./CharComponent.css";

const CharComponent = (props) => {
  return (
    <div className="letter" onClick={props.clicked}>
      <a>{props.letter}</a>
    </div>
  );
};

export default CharComponent;
