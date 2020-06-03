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
    companies: "technologies company..",
    showPersons: false
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 30 },
        { name: "Omer Jamous", age: 25 },
        { name: "Emad Eddin Jamous", age: 22 }
      ]
    });
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: event.target.value, age: 30 },
        { name: "Omer Jamous", age: 25 },
        { name: "Emad Eddin Jamous", age: 22 }
      ]
    });
  };

  togglePersonHandler = () => {
    this.setState({
      persons: [
        { name: "Abdullatif", age: 30 },
        { name: "Omer", age: 25 },
        { name: "Emad Eddin", age: 20 }
      ],
      companies: "technologies company..",
      showPersons: !this.state.showPersons
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px"
    };
    return (
      <div className="App">
        <h1>Hello I am React App</h1>
        <button onClick={this.togglePersonHandler} style={style}>
          show lists
        </button>
        {this.state.showPersons ? (
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              click={this.switchNameHandler.bind(this, "Abdullatif Jamous!!")}
              changed={this.nameChangeHandler}
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
        ) : null}
      </div>
    );
  }
}

export default App;
