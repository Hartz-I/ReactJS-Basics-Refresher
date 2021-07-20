//name starts with capital of components
//function name lower case

//stateless components. use as much of these you can

import React from 'react';

//in class based components we use this.props
const person = (props) => {
    return (
    <div>
        <p>I'm {props.name} and I am {props.age} years old</p>
        <p>{props.children}</p>
    </div>
    )
}
//with curly bracket we can do simple function within
//props.children for inbetween writtings
export default person