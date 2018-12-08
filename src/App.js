import React, { Component } from "react";
import "./App.css";
import IncidentDescription from "./IncidentDescription";

class App extends Component {
  render() {
    return (
      <div className="App">
        <IncidentDescription
          incident={{
            id: 246,
            description: "Сбой в работе сервера авторизации",
            source: "Сервер авторизации",
            date: "14.11.18"
          }}
        />
      </div>
    );
  }
}
export default App;
