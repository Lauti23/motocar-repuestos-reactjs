import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemDetail from './components/ItemDetail/ItemDetail';
import CartProvider from './Context/CartContext';
import Register from './components/Register/Register'
import { AuthProvider } from './Context/AuthContext';
import Login from './components/Login/Login';

//VIEWS
import Home from './views/Home/Home';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

export const CartContext = React.createContext('')

function App () {
  
  return (
    <>
      <Router>
        <AuthProvider>
          <CartProvider>
            <NavBar/>
            <Routes>
              <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>} />
              <Route path='/cart' element= {<ProtectedRoute><Cart/></ProtectedRoute>} />
              <Route path='/productos/:marcaId' element={<ItemListContainer/>} />
              <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>} />
              <Route path='/productos/:marcaId/detalle/:detalleId' element={<ItemDetail />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Routes>
            <Footer/>
          </CartProvider>
        </AuthProvider>
      </Router>
    </>

  );
}

export default App;

