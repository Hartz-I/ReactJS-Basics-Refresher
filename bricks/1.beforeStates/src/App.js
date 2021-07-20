import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; //name starts with uppercase

class App extends Component {
  render() { //renders html
    return (
      <div className="App">
        <h1>Hi, I'm a react app!</h1>
        <p>This is really working!!</p>
        <button>Switch Name</button>
        <Person name = "Max" age = "28" />
        <Person name ="manu" age = "29">My Hobbies: Racing</Person>
        <Person name = "stephny" age = "26"/>
      </div>//everything must be in one div
    );

    //the code gets compiled to this
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
