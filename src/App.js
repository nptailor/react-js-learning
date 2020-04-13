import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
import { render } from '@testing-library/react';
class App extends Component{
  state={
    person:[
      {name:"Venessa",age:40},
      {name:"Dan", age:38},
      {name:"Olivia", age:30}
    ]
  }
  render(){
    return (
      <div className="App">
       <h1>Hi React App</h1>
       <p>Hi I am a paragraph in react App</p>
       <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
       <Person name={this.state.person[1].name} age={this.state.person[1].age}>I am a Doctor !</Person>
       <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
      </div>
    );
    // return React.createElement('div',{className: 'App'},React.createElement('h1',null,"Hi i am from create element"))
  }
}

export default App;
