import React,{PureComponent} from 'react';
import Person from './Person/Person';


class Persons extends PureComponent {

  getSnapshotBeforeUpdate(prevProps , prevState){
    console.log('[Persons.js] getSnapShotBeforeUpdate');
    return null;
  }

  componentDidUpdate(){
    console.log('[Persons.js] componentDidUpdate')
  }
  render(){
    return(
      this.props.person.map((prsn,index)=>{
        return <Person 
        name={prsn.name} 
        age={prsn.age}
        click={() => this.props.clicked(index)}
        key={prsn.id}
        changed={(event) => this.props.changed(event,prsn.id)}/>
      })
    );
  }
} 

export default Persons;