import React from 'react'
import { useCartContext } from '../../Context/CartContext'

const ItemCart = ({ producto }) => {
    
    const {borrarDelCarrito} = useCartContext()
    
    return (
        <div className='cart'>
            <img src={producto.imagen} alt={producto.imagen}></img>
            <div>
                <p>{producto.title}</p>
                <p>{producto.cantidad}</p>
                <p>{producto.precio}</p>
                <p>Subtotal: ${producto.cantidad * producto.precio}</p>
                <p onClick={() => borrarDelCarrito(producto.id)}>Eliminar</p>
            </div>
        </div>
    )
}

export default ItemCart