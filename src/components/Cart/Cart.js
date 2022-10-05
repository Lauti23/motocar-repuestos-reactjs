import React from 'react'
import { useCartContext } from '../../Context/CartContext'
import './Cart.css'
import { Link } from 'react-router-dom'
import ItemCart from '../ItemCart/ItemCart'
import {addDoc, collection, getFirestore} from 'firebase/firestore'


const Cart = () => {

    const {carrito, precioTotal} = useCartContext()

    const orden = {
        comprador: {
            nombre: 'Victoria',
            email: 'vicky@gmail.com',
            telefono: '15645825',
            direccion: 'almirante brown',
        },
        productos: carrito.map(producto => ({id: producto.id, title: producto.title, price: producto.price, cantidad: producto.cantidad})),
        total: precioTotal(),
    }

    const terminarCompra = () => {
        const db = getFirestore()
        const ordenColeccion = collection(db, 'ordenes')
        addDoc(ordenColeccion, orden)
        .then(({id}) => console.log(id))
    }

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
            <button onClick={terminarCompra}>Terminar compra</button>
        </div>
    )
}

export default Cart