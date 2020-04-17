import React,{Component,Fragment} from 'react';
import classes from './Person.module.css';
import withClass from '../../../hoc/withClass'
import PropTypes from 'prop-types';
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
class Person extends Component{
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }
    componentDidMount(){
        this.inputElementRef.current.focus();
    }
    render(){
        return (
            <Fragment>
                    <p onClick={this.props.click} >I am {this.props.name}. My age is {this.props.age}</p>
                    <p>{this.props.children}</p>
                    <input 
                        type="text" 
                        onChange={this.props.changed} 
                        value={this.props.name}
                        ref={this.inputElementRef}/>
            </Fragment>
        );
    }
} 

Person.propTypes ={
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}
export default withClass(Person,classes.Person);