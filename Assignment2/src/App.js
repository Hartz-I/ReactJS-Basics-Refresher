import React, { Component } from "react";
import "./App.css";
import CharComponent from "./CharComponent/CharComponent";
import UserInput from "./UserInput/UserInput";
import ValidationComponent from "./ValidationComponent/ValidationComponent";

class App extends Component {
  state = {
    textLen: "0",
    letters: [],
  };

  onChangeHandler = (event) => {
    const text = event.target.value;

    const textLen = text.length;

    let i = 0;
    let letters = [];

    while (i < textLen) {
      letters.push(text[i]);
      i = i + 1;
    }

    this.setState({ textLen: textLen, letters: letters });
  };

  deleteCharHandler = (index) => {
    let letters = [...this.state.letters];

    letters.splice(index, 1);

    this.setState({ letters: letters });
  };

  render() {
    return (
      <div className="App">
        <UserInput
          changed={this.onChangeHandler}
          textLen={this.state.textLen}
        />
        <ValidationComponent textLen={this.state.textLen} />

        {this.state.letters.map((letter, index) => {
          return (
            <CharComponent
              letter={letter}
              key={index}
              clicked={() => this.deleteCharHandler(index)}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
