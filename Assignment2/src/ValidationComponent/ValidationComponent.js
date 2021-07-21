import React from "react";

const ValidtionComponent = (props) => {
  let textLen = props.textLen;

  const tooShort = <p>The text is too short</p>;

  const tooLong = <p>The text is too long</p>;

  const longEnough = <p>The text is long enough!</p>;

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
