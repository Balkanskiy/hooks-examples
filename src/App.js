import React, { Component } from "react";
import "./App.css";
import TodoListMin from "./TodoListMin";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoListMin
          incident={{
            id: 236,
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
