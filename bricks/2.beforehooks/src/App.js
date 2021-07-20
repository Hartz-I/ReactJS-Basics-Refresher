import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; //name starts with uppercase

class App extends Component {
  //this state defining only works on class bases components

  state = { //it's a property of the class App
    persons: [
      {name : 'Max', age : 28},
      {name: 'Manu', age : 29},
      {name : 'Stephnie', age: 26}
    ]
  }

  //a method of tha class can be called on an event. hence event handler for events such as onClick onCopy etc
  switchNameHandler = () => {
    //console.log('Was clicked!')
    //this.state.persons[0].name = 'Maximilian'; //just this won't work. need useState
    this.setState({persons: [ //simply merge. other states will be untouched
      {name : 'Maximilian', age : 28},
      {name: 'Manu', age : 29},
      {name : 'Stephnie', age: 27}
    ]})
  }

  render() { //renders html
    return (
      <div className="App">
        <h1>Hi, I'm a react app!</h1>
        <p>This is really working!!</p>
        <button onClick = {this.switchNameHandler}>Switch Name</button>
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age} />
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age}/>
      </div>//everything must be in one div
    );

    //the code gets compiled to this
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
