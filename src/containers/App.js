import React, {Component} from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass'
import Aux from '../hoc/Aux'
/* import styled from 'styled-components'; */



// Css Using styled components
          /* const StyleButton = styled.button`
            background-color:${props => props.alt? 'red' : 'green'};
            color:white;
            font: inherit;
            border: 1px solid blue;
            padding:10px;
            cursor: pointer;

            &:hover{
              background-color: ${props => props.alt? 'salmon' : 'lightgreen'};;
              color:black;}
          `; */


class App extends Component {

  state = ({
      person:[
        {id:'abc1',name:"Venessa",age:40},
        {id:'abc2',name:"Dan", age:38},
        {id:'abc3',name:"Olivia", age:30}
      ],
      showPersons:false,
      showCockpit:true,
      changeCounter:0
    })

  //function that changes name of persons on click
  switchNameHandler = (newName) =>{
    this.setState({
      person:[
        {name:newName,age:40},
        {name:"Nate", age:38},
        {name:"Olivia", age:21}
      ]
    })
    }


    //function that changes name of person based on input box value. called on change 
    changeNameHandler = (event,id) =>{
      const personIndex = this.state.person.findIndex(p=>{
        return p.id === id;
      })

      const prsn = {
        ...this.state.person[personIndex]
      }

      prsn.name = event.target.value;

      const persons = [...this.state.person]
      persons[personIndex] = prsn;

      this.setState((prevState,props)=>
      { return{
        person: persons, 
        changeCounter: prevState.changeCounter +1
      };
    });
  };


    //function that shows/hides data of persons on button click
    togglePersonsHandler =() =>{
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
    }


    //function that deletes a person's data when clicking on its box
    deletePersonHandler = (personIndex) =>{
      const persons =[ ...this.state.person];
      persons.splice(personIndex,1);
      this.setState({person: persons});
    }

    
    //render function , that sends data to the html
    render(){
        console.log('[App.js] rendering...')
        //in-line styling for button
              /*  const style={
                  backgroundColor:'green',
                  color:'white',
                  font: 'inherit',
                  border: '1px solid blue',
                  padding:'10px',
                  cursor: 'pointer',
                  ':hover': {
                    backgroundColor: 'lightgreen',
                    color:'black'
                  }
                }; */
        
        //variable used to display no persons data on page load and on button clicking
        let persons = null;
        
        
        //varaible used for dynamically styling text
       

        //if condition used to display person's data based on its boolean value
        if(this.state.showPersons === true){
          persons = (
            <div>
              {
                <Persons 
                  person={this.state.person} 
                  clicked={this.deletePersonHandler} 
                  changed={this.changeNameHandler}/>
              }
            </div>
          );
          // Styles using style-components
         /*  style.backgroundColor='red';
          style[':hover'] ={
            backgroundColor: 'salmon',
            color:'black'
          } */
        }


        return (
            <Aux>
              <button onClick={()=>{this.setState({showCockpit:false})}}>Show Cockpit</button>
              { this.state.showCockpit ?
              <Cockpit 
                title={this.props.pageTitle}
                personLength={this.state.person.length} 
                showPersons={this.state.showPersons}
                clicked={this.togglePersonsHandler}/>:null}
              {/*  Data shown based on the persons value */}
              {persons}
          </Aux>
        );
        // return React.createElement('div',{className: 'App'},React.createElement('h1',null,"Hi i am from create element"))
      }
}

export default withClass(App,classes.App);
