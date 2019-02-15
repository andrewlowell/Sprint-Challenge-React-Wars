import React from 'react';

const Char = props => {
  return (
    <li>{props.char.name} the {props.char.eye_color}-eyed wonder stands tall at {props.char.height} centimeters and weighs in at {props.char.mass} kilograms</li>
  );
}
 
export default Char;