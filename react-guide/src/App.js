import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello I am React App</h1>
        <Person name="Abdullatif" age="30" />
        <Person name="Omer" age="25" />
        <Person name="Emad Eddin" age="20" />
      </div>
    );
  }
}

export default App;
