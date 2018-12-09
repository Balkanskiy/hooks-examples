import React, { Component } from "react";
import "./App.css";
import GreetingUsereducer from "./Greeting-usereducer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GreetingUsereducer name={"World"} />
      </div>
    );
  }
}
export default App;
