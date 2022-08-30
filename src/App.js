import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ItemCount from './components/ItemCount/ItemCount';




function App () {
  
  return (
    <>
      <header>
        <Header/>
      </header>
      <main className='main'>
        <ItemCount/>


      </main>
    </>
  );
}

export default App;

