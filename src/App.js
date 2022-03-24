import { useState, useEffect } from 'react';
// useState give us the ability to encapsulate a local state in a functional component
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import logo from './logo.svg';
import './App.css';


const App = () => {

  const [searchField, setSearchField] = useState(''); //array destructuring - allows us to assign variable to values inside an array; [value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  console.log("render")

  useEffect(() => {
    console.log("json")
    // effect we want to happen in the functional component
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => setMonsters(users))
  }, [])


  const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
      }

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchField);
     });
     
     setFilteredMonsters(newFilteredMonsters);
     console.log('effect')
  }, [monsters, searchField])

  return(
    <div className="App">
       <h1 className='app-title'>Monster's Rolodex</h1>
       <SearchBox onChangeHandler={onSearchChange} placeholder={'search monsters'} classname={'monsters-search-box'}/>
      
       <CardList monsters={filteredMonsters}/>
    </div>
  )
}

// class App extends Component{

//   constructor(){
//     super(); // calling the constructor method on the component.

//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//     //console.log("constructor");
//   }

//   componentDidMount(){
//     console.log("component mounted");

//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then((users) => this.setState(() => {
//       return {monsters: users}
//     }))
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return { searchField }
//     })
//   }

//   render(){
//     console.log("rendered");

//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
    
//     const filteredMonsters = monsters.filter(monster => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });
    
//     return (
//       <div className="App">
//         <h1 className='app-title'>Monster's Rolodex</h1>
//         <SearchBox onChangeHandler={onSearchChange} placeholder={'search monsters'} classname={'monsters-search-box'}/>
        
//         <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//   }
// }

export default App;
// callback is just a function that you pass it to a handler, you wanted to call during process.