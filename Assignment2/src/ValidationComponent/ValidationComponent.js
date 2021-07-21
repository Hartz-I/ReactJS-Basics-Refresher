import React from "react";
import "./ValidationComponent.css";

const ValidtionComponent = (props) => {
  let textLen = props.textLen;

  const tooShort = <p className="val-short">The text is too short!</p>;

  const tooLong = <p className="val-long">The text is too long@</p>;

  const longEnough = <p className="val-enough">The text is long enough!</p>;

  let text = null;

  if (textLen < 5) {
    text = tooShort;
  } else if (textLen > 20) {
    text = tooLong;
  } else {
    text = longEnough;
  }

  return <div>{text}</div>;
};

export default ValidtionComponent;
