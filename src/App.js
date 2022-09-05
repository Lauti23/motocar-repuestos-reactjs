import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemList from './components/ItemList/ItemList';



function App () {
  
  
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main className='main'>
        <ItemListContainer/>
        {/* <ItemList/> */}

      </main>
    </>
  );
}

export default App;

