import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import logo from './logo.svg';
import './App.css';

class App extends Component{

  constructor(){
    super(); // calling the constructor method on the component.

    this.state = {
      monsters: [],
      searchField: '',
    };
    //console.log("constructor");
  }

  componentDidMount(){
    console.log("component mounted");

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => this.setState(() => {
      return {monsters: users}
    }))
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField }
    })
  }

  render(){
    console.log("rendered");

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    
    return (
      <div className="App">
        <h1 className='app-title'>Monster's Rolodex</h1>
        <SearchBox onChangeHandler={onSearchChange} placeholder={'search monsters'} classname={'monsters-search-box'}/>
        
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
// callback is just a function that you pass it to a handler, you wanted to call during process.