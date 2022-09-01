import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';



function App () {
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

