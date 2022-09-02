import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';



function App () {
  
  fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(json => console.log(json.results))
  
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main className='main'>
        <ItemListContainer/>

      </main>
    </>
  );
}

export default App;

