import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';


//VIEWS
import Home from './views/Home/Home';
import Cart from './views/Cart/Cart';


function App () {
  
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element= {<Home/>} />
          <Route path='/cart' element= {<Cart/>} />
          <Route path='/productos/:marcaId' element={<ItemListContainer/>} />
        </Routes>
      </Router>
    </>

  );
}

export default App;

