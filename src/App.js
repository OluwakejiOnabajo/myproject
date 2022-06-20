import { Component } from 'react';
import './App.css';
import Keji from './Components/Keji';


class App extends Component {
 
    state = {
      persons: [
        {name: "Keji", age: 24},
      {name: "Segun", age: 24},
      {name: "Sola", age: 24}
      ],
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: "Abayomi", age: 104},
      {name: newName, age: 14},
      {name: "Pancho", age: 204}
      ]
    })
  }
    
  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: event.target.value, age: 104},
      {name: "Abayomi", age: 14},
      {name: "Pancho", age: 204}
      ]
    })
  }


  showPersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  render() {

    let people = null;
    if(this.state.showPersons){
      people =  <div>
      <h1>HI, I'M A REACT DEVELOPER</h1>
      <Keji name = {this.state.persons[0].name} age = {this.state.persons[0].age} caleb = {() => this.switchNameHandler("Asaba")} zeh = {this.nameChangeHandler} />
      <Keji name = {this.state.persons[1].name} age = {this.state.persons[1].age} />
      <Keji name = {this.state.persons[2].name} age = {this.state.persons[2].age} />
      </div>
    }

  return (
    <div className="App">
      
      <button onClick={this.showPersonsHandler}>SWITCH</button>
      {people
      /* { this.state.showPersons ?
        <div>
      <h1>HI, I'M A REACT DEVELOPER</h1>
      <Keji name = {this.state.persons[0].name} age = {this.state.persons[0].age} caleb = {() => this.switchNameHandler("Asaba")} zeh = {this.nameChangeHandler} />
      <Keji name = {this.state.persons[1].name} age = {this.state.persons[1].age} />
      <Keji name = {this.state.persons[2].name} age = {this.state.persons[2].age} />
      </div>
      : null
      } */
      }
    </div>
  )
  }
}




export default App;
