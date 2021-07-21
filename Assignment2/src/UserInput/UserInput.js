import React from "react";

const UserInput = (props) => {
  return (
    <div>
      <input type="text" onChange={props.changed}></input>
      <p>{props.textLen}</p>
    </div>
  );
};

export default UserInput;
