import React, { Component } from "react";
import classes from "./Person.css";

class Person extends Component {
  render() {
    console.log("[person.js] rendering...");
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          I am {this.props.name} and I am {this.props.age} years old!
        </p>
        <input type="text" onChange={this.props.changed} />
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default Person;