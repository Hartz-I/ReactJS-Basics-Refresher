import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMassage: "4f4 not found!",
  };

  componentDidCatch = (error, info) => {
    //built in function for catching errors
    this.setState({ hasError: true, errorMassage: error });
  };

  render() {
    if (this.state.hasError) {
      //if error caught then
      return <h1>{this.state.errorMassage}</h1>;
    } else {
      return this.props.children; //otherwise put whatever in between! cuz in between is our mapped code!
    }
  }
}

export default ErrorBoundary; //has to use it to wrap the div

//won't show up in development mode but will in the server!!
