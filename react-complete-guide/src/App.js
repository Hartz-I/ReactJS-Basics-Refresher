import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person"; //name starts with uppercase

class App extends Component {
  //this state defining only works on class bases components

  state = {
    //it's a property of the class App
    persons: [
      { id: "123", name: "Max", age: 28 },
      { id: "456", name: "Manu", age: 29 },
      { id: "789", name: "Stephnie", age: 26 },
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

  nameChangedHandler = (event, id) => {
    //changing the name dynamically
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id == id;
    }); //or use index to get element

    const person = {
      ...this.state.persons[personIndex], //copying so main state doesn't change
    };

    //alt: won't use
    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value; //change the copied person name value

    const persons = [...this.state.persons]; //copied the persons array

    persons[personIndex] = person; //set the copied person element to copied person array

    this.setState({
      persons: persons, //update the array
    });
  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons; //deletes the index positioned element. works cuz of arr and objects set only pointers. so changes the main element

    //const persons = this.state.persons.slice(); or
    const persons = [...this.state.persons]; //spreading is a option to not change main file

    persons.splice(personIndex, 1);

    this.setState({ persons: persons });
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
          {this.state.persons.map((person, index) => {
            //map works on an array and returns an array
            return (
              <Person
                name={person.name}
                age={person.age}
                key={
                  person.id /** important for inner work. makes render faster */
                }
                click={() => this.deletePersonHandler(index)} //to pass the value we set it as a function
                changed={(event) => this.nameChangedHandler(event, person.id)} //like function put value but event exeption. need in outer function to from inner space
              />
            );
          })}
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
