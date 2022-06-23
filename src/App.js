import { Component } from 'react';
import './App.css';
import Keji from './Components/Keji';


class App extends Component {
 
    state = {
      people: [
        {id: "eded", name: "Keji", age: 24},
      {id: "edcw", name: "Segun", age: 24},
      {id: "lq1dlw", name: "Sola", age: 24}
      ],
      showPersons: false
  }

  showPersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }
  
  switchNameHandler = (newName) => {
    this.setState({
      people: [
        {name: "Abayomi", age: 104},
      {name: newName, age: 14},
      {name: "Pancho", age: 204}
      ]
    })
  }
    
  nameChangedHandler = (event, id) => {
    const persinIndex = this.state.people.findIndex(p =>{
      return p.id === id
    })
    const persoon = [...this.state.people[persinIndex]]
    persoon.name = event.target.value
    
    const abiru = [...this.state.people]
    abiru[persinIndex] = persoon

    this.setState({
      abiru: abiru
  })
  }

  deletePersonsHandler = (personIndex) =>{
    const osas = this.state.people;
    osas.slice(personIndex, 1)
    this.setState({
      osas:osas
    })
  }

  render() {

    let people = null;

    if(this.state.showPersons){
      people = (
        <div>
      {this.state.people.map((persons, index) => {
        return <Keji 
        clicked = {()=>this.deletePersonsHandler(index)}
        name = {persons.name} 
        age = {persons.age} 
        key={persons.id} 
        zeh = {(event)=>this.nameChangedHandler(event, persons.id)} 
        />
      })}
      <button onClick={this.switchNameHandler.bind(this, 'joel')}>SWITCH NAME</button>
      </div>
      )
    }

  return (
    <div className="App">
      <h1>Hi, I am a React Developer</h1>
      <button onClick={this.showPersonsHandler}>SWITCH</button>
      {people}
    </div>
  )
  }
}




export default App;
