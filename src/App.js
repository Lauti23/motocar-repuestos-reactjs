import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemDetail from './components/ItemDetail/ItemDetail';
import CartProvider from './Context/CartContext';

//VIEWS
import Home from './views/Home/Home';
import Cart from './components/Cart/Cart';

export const CartContext = React.createContext('')

function App () {
  
  return (
    <>
      <Router>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element= {<Home/>} />
            <Route path='/cart' element= {<Cart/>} />
            <Route path='/productos/:marcaId' element={<ItemListContainer/>} />
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>} />
            <Route path='/productos/:marcaId/detalle/:detalleId' element={<ItemDetail />} />
          </Routes>
        </CartProvider>
      </Router>
    </>

  );
}

export default App;

