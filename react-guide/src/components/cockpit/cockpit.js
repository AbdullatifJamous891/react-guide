import React from "react";
import classes from "./cockpit.css";

const cockpit = props => {
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  const assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>Hello I am React App</h1>
      <p className={assignedClasses.join(" ")}>This is realy working!!..</p>
      <button className={btnClass} onClick={props.clicked}>
        show lists
      </button>
    </div>
  );
};

export default cockpit;
