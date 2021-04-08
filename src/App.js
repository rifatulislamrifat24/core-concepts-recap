import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  const [ nayoks, setNayoks ] = useState([]);

  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setNayoks(data))
  }, [])

  // const nayoks = [{name: 'Jasim', age: 56}, {name: 'Deepjol', age: 61}, {name: 'Bapparaz', age: 15}, {name: 'Omar Sani', age: 45}]

  return (
    <div className="App">
      <header className="App-header">
        <MovieCounter></MovieCounter>
        {
          nayoks.map(nk => <Nayok name={nk.name} age={nk.age} key={nk.id}></Nayok>)
        }
      </header>
    </div>
  );
}

function MovieCounter(){

  const [count, setCount] = useState(0);
  
  function handleClick(){
     setCount(count + 1);
  }

  return(
    <div>
      <button onClick={handleClick}>Add Movie</button>
      <h3>Number of movies: {count}</h3>
      <MovieDisplay movies={count}></MovieDisplay>
      <MovieDisplay movies={count}></MovieDisplay>
      <MovieDisplay movies={count + 10}></MovieDisplay>
      <MovieDisplay movies={count + 5}></MovieDisplay>
      <MovieDisplay movies={count}></MovieDisplay>
    </div>
  );
}

function MovieDisplay(props){
  return <h4>Movies I have acted: {props.movies}</h4>
}

function Nayok(props){
  const nayokStyle = {
    border: '2px solid purple',
    margin: '20px',
    width: '500px'
  }
  return (
    <div style= {nayokStyle}>
      <h3>Name: {props.name}</h3>
      <h4>Age: {props.age}</h4>
    </div>
  )
}

export default App;
