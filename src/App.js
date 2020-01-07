import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'dscds3', name: "Anuraag", age: 25 },
      { id: 'werwrw', name: "Raghwendra", age: 34 },
      { id: 'wrwerwewt4', name: "Nova", age: 23 }
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }

  render() {

    const style = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            name = {person.name}
            age = {person.age}
            click = {() => this.deletePersonHandler(index)}
            key = {person.id}
            changed = {(event) => this.nameChangedHandler(event, person.id)} />
          })
    }
      </div>
      );
        style.backgroundColor = 'red';
    }

    let classes = [];

    if (this.state.persons.length < 3) {
      classes.push('red');
    }

    if (this.state.persons.length < 2) {
      classes.push('bold');
    }

    classes = classes.join(' ');

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className = {classes}>It's really working!</p>
        <button 
        style = {style}
        onClick = {this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;