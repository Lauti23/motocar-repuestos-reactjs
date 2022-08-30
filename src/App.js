import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import CardComponent from './components/Cards/Cards';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



function App () {
  return (
    <>
      <header>
        <Header/>
      </header>
      <main className='main'>
        <ItemListContainer/>

      </main>
    </>
  );
}

export default App;

