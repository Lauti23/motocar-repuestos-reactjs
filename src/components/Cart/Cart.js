import React from 'react'
import { useCartContext } from '../../Context/CartContext'
import './Cart.css'
import { Link } from 'react-router-dom'
import ItemCart from '../ItemCart/ItemCart'


const Cart = () => {

    const {carrito, precioTotal} = useCartContext()

    if (carrito.length === 0) {
        return (
            <div className='cart'>
                <div className='cartTitle'>
                    <h1 className='title'>CARRITO</h1>
                    <p className='sinProductos'>No hay productos en el carrito</p>
                    <Link to='/' className='linkTienda'>Ir a la tienda</Link>
                </div>
            </div>
        
    );
    }

    return (
        <div>
            {carrito.map(producto => <ItemCart key={producto.id} producto={producto} />)}
            <p>
                Total: {precioTotal()}
            </p>
        </div>
    )
}

export default Cart