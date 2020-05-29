import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Abdullatif", age: 30 },
      { name: "Omer", age: 25 },
      { name: "Emad Eddin", age: 20 }
    ],
    companies: "technologies company.."
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: "Abdullatif Jamous", age: 30 },
        { name: "Omer Jamous", age: 25 },
        { name: "Emad Eddin Jamous", age: 22 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello I am React App</h1>
        <button onClick={this.switchNameHandler}>press here</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
          {" "}
          and I am a software developer{" "}
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
