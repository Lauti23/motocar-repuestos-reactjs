import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

//VIEWS
import Home from './views/Home/Home';
import Contact from './views/Contact/Contact';
import Bikes from './views/Bikes/Bikes';
import MotoDetail from './views/MotoDetail/MotoDetail';
import Cart from './views/Cart/Cart';
import Productos from './views/Productos/Productos';


function App () {
  
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element= {<Home/>} />
          <Route path='/contact' element= {<Contact/>} />
          <Route path='/detalle' element= {<MotoDetail/>} />
          <Route path='/cart' element= {<Cart/>} />
          <Route path='/productos/:categoriaId' element={<ItemListContainer/>} />
        </Routes>
      </Router>
    </>

  );
}

export default App;

