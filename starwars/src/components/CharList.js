import React, { Component } from 'react';
import './StarWars.css';
import Char from './Char';

const CharList = props => {
  return (
    <ul>
      {props.chars.map((c, i) => (
        <Char key={i} char={c} />
      ))}
    </ul>
  );
}
 
export default CharList;