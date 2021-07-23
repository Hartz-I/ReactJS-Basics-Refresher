//name starts with capital of components
//function name lower case

//this is an stateless, dumb component. use as many of these you can

import React from "react";
import "./Person.css";

//in class based components we use this.props

const person = (props) => {
  //adding errors boundary
  const rnd = Math.random();

  console.log(rnd);

  if (rnd > 0.7) {
    throw new Error("something went wrong!");
  }

  return (
    <div className="Person">
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};
//with curly bracket we can do simple function within
//props.children for inbetween writtings
export default person;
