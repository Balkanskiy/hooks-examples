import React, { Component } from "react";
import "./App.css";
import Greeting from "./Greeting";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greeting name={"User"} />
      </div>
    );
  }
}
export default App;
