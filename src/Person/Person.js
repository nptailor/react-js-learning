import React from 'react';
import classes from './Person.module.css';
/* import styled from 'styled-components'; */


// Styling div using styled components
/* const StyleDiv= styled.div`
    width: 60%;
    border: 1px solid greenyellow;
    box-shadow: 1px 2px 3px greenyellow;
    margin: 16px auto;
    padding: 10px;
    text-align: center;

    @media (min-width: 700px){
        width: 450px
    }
` */
const person =(props)=>{
    return (
        <div className={classes.Person}>
            <p onClick={props.click} >I am {props.name}. My age is {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
}

export default person;