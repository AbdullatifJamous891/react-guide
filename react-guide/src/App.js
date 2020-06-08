import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import styled from "styled-components";

class App extends Component {
  state = {
    persons: [
      { id: "sadf", name: "Abdullatif", age: 30 },
      { id: "sadf093k", name: "Omer", age: 25 },
      { id: "fedgea", name: "Emad Eddin", age: 20 }
    ],
    companies: "technologies company..",
    showPersons: false
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  };

  togglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => {
                  this.deletePersonHandler(index);
                }}
                changed={event => this.nameChangeHandler(event, person.id)}
                key={person.id}
              />
            );
          })}
        </div>
      );
      // style.backgroundColor = "red";
      // style[":hover"] = {
      //   backgroundColor: "salmon",
      //   color: "black"
      // };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }
    return (
      <div className="App">
        <h1>Hello I am React App</h1>
        <p className={classes.join(" ")}>This is realy working!!..</p>
        <button className="button" onClick={this.togglePersonHandler}>
          show lists
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
