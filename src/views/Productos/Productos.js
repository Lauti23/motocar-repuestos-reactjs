import React from 'react'
import './Productos.css'
import { Link } from 'react-router-dom'

const Productos = () => {
    return (
        <div className='contenedorBotonesCategoria'>
            <Link to='/productos/bikes' className='linksCategorias'>
                <div className='botonCategoria'>
                    <p>MOTOS</p>
                </div>
            </Link>
            <Link to='/productos/parts' className='linksCategorias'>
                <div className='botonCategoria'>
                    <p>REPUESTOS</p>
                </div>
            </Link>
            <Link to='productos/clothing' className='linksCategorias'>
                <div className='botonCategoria'>
                    <p>INDUMENTARIA</p>
                </div>
            </Link>
        </div>
    )
}

export default Productos