import React, { Component } from "react";
import classes from "./Person.css";
import Aux from "../../../hoc/aux";

class Person extends Component {
  render() {
    console.log("[person.js] rendering...");
    return (
      <Aux>
        <p onClick={this.props.click}>
          I am {this.props.name} and I am {this.props.age} years old!
        </p>
        <input type="text" onChange={this.props.changed} />
        <p>{this.props.children}</p>
      </Aux>
    );
  }
}

export default Person;
