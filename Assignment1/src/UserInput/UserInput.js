import React from "react";

const UserInput = (props) => {
  return (
    <div>
      <input onChange={props.changed} value={props.name}></input>
    </div>
  );
};

export default UserInput;
