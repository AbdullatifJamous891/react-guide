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

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={this.switchNameHandler.bind(this, "Abdullatif Jamous!!")}
                changed={this.nameChangeHandler}
              />
            );
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hello I am React App</h1>
        <button onClick={this.togglePersonHandler} style={style}>
          show lists
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
