import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person"; //name starts with uppercase

class App extends Component {
  //this state defining only works on class bases components

  state = {
    //it's a property of the class App
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephnie", age: 26 },
    ],
    showPersons: false,
  };

  //a method of tha class can be called on an event. hence event handler for events such as onClick onCopy etc
  switchNameHandler = (newName) => {
    //a way could be binding!
    //console.log('Was clicked!')
    //this.state.persons[0].name = 'Maximilian'; //just this won't work. need useState
    this.setState({
      persons: [
        //simply merge. other states will be untouched
        { name: newName, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephnie", age: 27 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    //changing the name dynamically
    this.setState({
      persons: [
        //simply merge. other states will be untouched
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 }, //targets the input section and then takes the value
        { name: "Stephnie", age: 27 },
      ],
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    });
  };

  render() {
    //renders html

    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = ( //putting the content in the variable if conditon is met and then just showing the variable
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={
              this.switchNameHandler.bind(this, "Max!!")
              /**so we can pass methods to dumb components. Use bind instead of function call */
            }
            changed={this.nameChangedHandler}
          >
            My Hobbies: Racing
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react app!</h1>
        <p>This is really working!!</p>
        <button
          style={style} //other way of doing style. variable above
          onClick={this.togglePersonsHandler /** an alternative to bind */}
        >
          Toggle Persons
        </button>

        {persons /**preferred way of using conditionals */}
      </div> //everything must be in one div
    );

    //the code gets compiled to this
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
