import React, {useEffect,useRef,useContext} from 'react';
import styles from './Cockpit.module.css';
import AuthContext from '../../context/auth-context'

const Cockpit = (props) =>{
    const buttonToggleRef = useRef(null)
    const authContext = useContext(AuthContext);
    useEffect(()=>{
        console.log('[Cockpit.js] render cycle useEffect' )
     /*    setTimeout(() =>
        {alert("Cockpit set time out")},1000
        ); */
        buttonToggleRef.current.click();
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
            ref={buttonToggleRef}
            className={btnClass.join(' ')}
            alt={props.showPersons}
            onClick={props.clicked}>Toggle Person
        </button>
       <button onClick={authContext.login}>Log In</button>
    </div>
    )
};

export default React.memo(Cockpit);