import React, { Component } from "react";
import "./App.css";

class App extends Component {

  handleToggle(event) {
    console.log("was clicked")
  }

  render() {
    return <button onClick={this.handleToggle}>Toggle User View</button>;
  }
}

export default App;
