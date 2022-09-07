import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemList from './components/ItemList/ItemList';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App () {
  
  
  return (
    <>
      <NavBar/>
      
      <ItemListContainer/>
      <ItemDetailContainer/>
    </>

  );
}

export default App;

