import React from 'react';

const Person = (props) => {
  let x = 5;
  function test(){
    return x;
  };
  //return <p>Hi, I am a person and I am { test() + x + " (get the result from variable and function) " } years old. </p>
  return (
      <div>
        <p onClick={props.click}>Hi, My name is {props.name} and I am {props.age} year's old.</p>
        <p className="children">{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
      </div>
  )
};

export default Person;
