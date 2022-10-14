import React from 'react'
import { useCartContext } from '../../Context/CartContext'
import './ItemCart.css'


const ItemCart = ({ producto }) => {
    
    const {borrarDelCarrito} = useCartContext()
    
    return (
        <div className='cart'>
            <table>
                <tbody>
                    <tr>
                        <th>IMAGEN</th>
                        <th>MARCA</th>
                        <th>MODELO</th>
                        <th>CANTIDAD</th>
                        <th>PRECIO</th>
                        <th>ELIMINAR</th>
                    </tr>
                    <tr>
                        <td><img className='cartImg' src={producto.imagen} alt={producto.imagen}></img></td>
                        <td>{producto.marca}</td>
                        <td>{producto.modelo}</td>
                        <td>{producto.cantidad}</td>
                        <td>${producto.cantidad * producto.precio}</td>
                        <td><p className='delete' onClick={() => borrarDelCarrito(producto.id)}>X</p></td>
                    </tr>
                </tbody>
            </table>
            
            
            
            
            
            
            {/* <div className='tabla'>
                <p>IMAGEN</p>
                <p>MARCA</p>
                <p>MODELO</p>
                <p>CANTIDAD</p>
                <p>PRECIO</p>
                <p>ELIMINAR</p>
            </div>
            <div className='itemContainer'>
                <img src={producto.imagen} alt={producto.imagen}></img>
                <p>{producto.marca}</p>
                <p>{producto.modelo}</p>
                <p>{producto.cantidad}</p>
                <p>{producto.precio}</p>
                <p>${producto.cantidad * producto.precio}</p>
                <p className='delete' onClick={() => borrarDelCarrito(producto.id)}>Eliminar</p>
            </div> */}
        </div>
    )
}

export default ItemCart