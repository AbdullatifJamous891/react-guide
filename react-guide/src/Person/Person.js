import React from "react";

const person = props => {
  return (
    <div>
      <p onClick={props.click}>
        I am {props.name} and I am {props.age} years old!
      </p>
      <input type="text" onChange={props.changed} />
      <p>{props.children}</p>
    </div>
  );
};

export default person;
