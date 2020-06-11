import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/cockpit/cockpit";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js constructor]");
  }
  state = {
    persons: [
      { id: "sadf", name: "Abdullatif", age: 30 },
      { id: "sadf093k", name: "Omer", age: 25 },
      { id: "fedgea", name: "Emad Eddin", age: 20 }
    ],
    companies: "technologies company..",
    showPersons: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDrivedStateProps", props);
    return state;
  }

  // componentWillMount() {
  //   console.log("[app.js] componentWillMount");
  // }

  componentDidMount() {
    console.log("[app.js] componentDidMount");
  }

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
    console.log("[App.js] render");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
