import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'; //name starts with uppercase

const App = props => {
 const [personsState, setPersonsState] = useState({ //the personsState works as state and setPersonsState is the function that works on it
    persons: [
      {name : 'Max', age : 28},
      {name: 'Manu', age : 29},
      {name : 'Stephnie', age: 26}
    ]
  });

  //instead we'll have multiple useStates for multiple objects
  const [otherState, setOtherState] = useState({
    otherState: 'some other state'
  })

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    setPersonsState({persons: [ //as mentioned this can change the state
      {name : 'Maximilian', age : 28},
      {name: 'Manu', age : 29},
      {name : 'Stephnie', age: 27}
    ],
    //otherState: personsState.otherState but we'll not use it like this
    }) //but this doesn't merge!! this changes the whole thing!
  }

  //this.state is changed to personsState
  return (
      <div className="App">
        <h1>Hi, I'm a react app!</h1>
        <p>This is really working!!</p>
        <button onClick = {switchNameHandler}>Switch Name</button>
        <Person name = {personsState.persons[0].name} age = {personsState.persons[0].age} />
        <Person name = {personsState.persons[1].name} age = {personsState.persons[1].age}>My Hobbies: Racing</Person>
        <Person name = {personsState.persons[2].name} age = {personsState.persons[2].age}/>
      </div>//everything must be in one div
    );

    //the jsx code gets compiled to this
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }

export default App;

