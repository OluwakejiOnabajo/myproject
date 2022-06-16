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

  render() {
  return (
    <div className="App">
      <h1>HI, I'M A REACT DEVELOPER</h1>
      <Keji name = {this.state.persons[0].name} age = {this.state.persons[0].age} caleb = {() => this.switchNameHandler("Asaba")} zeh = {this.nameChangeHandler} />
      <Keji name = {this.state.persons[1].name} age = {this.state.persons[1].age} />
      <Keji name = {this.state.persons[2].name} age = {this.state.persons[2].age} />

      <button onClick={this.switchNameHandler.bind(this, 'Adun')}>SWITCH</button>
    </div>
  )
  }
}




export default App;
