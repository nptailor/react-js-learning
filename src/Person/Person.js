import React from 'react'

const person =(props)=>{
return (
<div>
<p>I am {props.name}. My age is {props.age}</p>
<label>{props.children}</label>
</div>
);
}

export default person;