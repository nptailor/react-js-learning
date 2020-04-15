import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
import styles from './App.module.css'
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
      showPersons:false
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

      this.setState({person: persons})
    }


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
        let btnClass = [styles.Button]
        
        //varaible used for dynamically styling text
        const classes=[styles.Text];
        if (this.state.person.length <=2){
          classes.push(styles.Red);
        }
        if(this.state.person.length <=1){
          classes.push(styles.Bold);
        }

        //if condition used to display person's data based on its boolean value
        if(this.state.showPersons === true){
          persons = (
            <div>
              {
                this.state.person.map((prsn,index) => {
                return <Person 
                name={prsn.name} 
                age={prsn.age}
                click={this.deletePersonHandler.bind(this,index)}
                key={prsn.id}
                changed={(event) => this.changeNameHandler(event,prsn.id)}/>
              })
              }
            </div>
          );

          btnClass.push(styles.Red);
          // Styles using style-components
         /*  style.backgroundColor='red';
          style[':hover'] ={
            backgroundColor: 'salmon',
            color:'black'
          } */
        }


        return (
            <div className="App">
            <h1>Hi React App</h1>
            <p className={classes.join(' ')}>Hi I am a paragraph in react App</p>
            <button 
              className={btnClass.join(' ')}
              alt={this.state.showPersons}
              onClick={this.togglePersonsHandler}>Toggle Person
            </button>

            {/*  Data shown based on the persons value */}
            {persons}
          </div>
        );
        // return React.createElement('div',{className: 'App'},React.createElement('h1',null,"Hi i am from create element"))
      }
}

export default App;
