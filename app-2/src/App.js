import React, {useState, useEffect} from 'react';
import StarWars from './Components/StarWars';
import axios from 'axios';
import './App.css';

function App() {
  const [list, setList] = useState([])

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
      .then((res) => {
        setList(res.data.results)
      })
  }, [])

  return (
    <div className='App'>
      {list.map((elem, i) => {
        return <StarWars className='listOne' name={elem.name} key={i} />
      })}
    </div>
  );
}

export default App;
