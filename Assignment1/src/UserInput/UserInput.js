import React from "react";

const UserInput = (props) => {
  const style = {
    border: "2px solid #bf1948",
    borderRadius: "5px",
    width: "30%",
    height: "50px",
    fontSize: "32px",
    margin: "16px auto",
    boxShadow: "1px 1px 3px black",
  };

  return (
    <div>
      <input onChange={props.changed} value={props.name} style={style}></input>
    </div>
  );
};

export default UserInput;
