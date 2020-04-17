import React, {useEffect} from 'react';
import styles from './Cockpit.module.css';

const Cockpit = (props) =>{
    useEffect(()=>{
        console.log('[Cockpit.js] render cycle useEffect' )
        setTimeout(() =>
        {alert("Cockpit set time out")},1000
        );
        return() =>{
            console.log('[Cockpit.js] unmounted');
        }
    },[])

    useEffect(() =>{
        console.log("[Cockpit.js] 2nd use effect");
        return()=>{
            console.log('[Cockpit.js] 2nd useEffect unmounted ')
        }
    })
    const classes=[styles.Text];
    let btnClass = [styles.Button];

    if(props.showPersons){
        btnClass.push(styles.Red);
    }

    if (props.personLength<= 2 ){
        classes.push(styles.Red);
    }

    if(props.personLength <=1){
       classes.push(styles.Bold);
    }

    return(
        <div>
        <h1>{props.title}</h1>
        <p className={classes.join(' ')}>Hi I am a paragraph in react App</p>
        <button 
            className={btnClass.join(' ')}
            alt={props.showPersons}
            onClick={props.clicked}>Toggle Person
        </button>
    </div>
    )
};

export default React.memo(Cockpit);