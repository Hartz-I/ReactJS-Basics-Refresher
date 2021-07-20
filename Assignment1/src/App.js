import React, { Component } from "react";
import "./App.css";
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";

class App extends Component {
  state = {
    people: [
      {
        name: "Robin",
        work: "McDonalds",
      },
      {
        name: "Natasha",
        work: "Wendies",
      },
      {
        name: "Alif",
        work: "BurgerKing",
      },
      {
        name: "Stacy",
        work: "Subway",
      },
    ],
  };

  userWorkHandler = (event) => {
    this.setState({
      people: [
        {
          name: "Robin",
          work: event.target.value,
        },
        {
          name: "Natasha",
          work: event.target.value,
        },
        {
          name: "Alif",
          work: event.target.value,
        },
        {
          name: "Stacy",
          work: event.target.value,
        },
      ],
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

    return (
      <div className="App">
        <UserInput
          changed={this.userWorkHandler}
          name={this.state.people[0].work}
        />
        <UserOutput
          name={this.state.people[0].name}
          work={this.state.people[0].work}
        />
        <UserOutput
          name={this.state.people[1].name}
          work={this.state.people[1].work}
        />
        <UserOutput
          name={this.state.people[2].name}
          work={this.state.people[2].work}
        />
        <UserOutput
          name={this.state.people[3].name}
          work={this.state.people[3].work}
        />
      </div> //everything must be in one div
    );

    //the code gets compiled to this
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
