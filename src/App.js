import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{

  constructor(){
    super(); // calling the constructor method on the component.

    this.state = {
      monsters: [],
      searchField: '',
    };
    console.log("constructor");
  }

  componentDidMount(){
    console.log("component mounted");

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => this.setState(() => {
      return {monsters: users}
    }, 
    ()=>{
      console.log(this.state)
    }))
  }

  render(){
    console.log("rendered");

    
    const filteredMonsters = this.state.monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });
    
    return (
      <div className="App">

        <input className='search-box' type='search' placeholder='search monsters' onChange={(event) => {
          const searchField = event.target.value.toLocaleLowerCase();

          this.setState(() => {
            return { searchField }
          })

        }} />

        { filteredMonsters.map((monster) => {
            return (
              <div key={monster.id}>
                  <h1>{monster.name}</h1>
              </div>
            );
          })}
      </div>
    );
  }
}

export default App;
// callback is just a function that you pass it to a handler, you wanted to call during process.