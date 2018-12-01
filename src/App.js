import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person: [
      { name : 'Max', age: 40 },
      { name : 'Cool', age: 30 },
      { name : 'Hoter', age: 24 }
    ]
  }

  switchHandler = (newArg) => {
    this.setState({
      person: [
        { name : newArg, age: 41 },
        { name : 'Coolinum', age: 31 },
        { name : 'Hotery', age: 24 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      person: [
        { name : 'Max', age: 41 },
        { name : event.target.value, age: 31 },
        { name : 'Hotery', age: 24 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Ready To Learn React</h1>
        <button onClick={this.switchHandler.bind(this, "Maximum")}>Get Random Name</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age} click={this.switchHandler.bind(this, "Minumum")}/>
        <Person name={this.state.person[1].name} age={this.state.person[1].age} changed={this.nameChangedHandler} />
        <Person name={this.state.person[2].name} age={this.state.person[2].age}> I am a children paragraph</Person>
      </div>
    );
  }
}

export default App;
