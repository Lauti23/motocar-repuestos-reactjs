import React from 'react'
import './ItemList.css'
import Item from '../Item/Item'
import MotoDetail from '../../views/MotoDetail/MotoDetail'
import {Link} from 'react-router-dom'

const ItemList = ({bikes}) => {

    // console.log(bikes)
    
    return (
        <div className="itemList">
            {bikes.map((bike) => {
                return (
                    <div className='card'>
                        <img src={bike.imagen} alt='moto'></img>
                        <p className='marca'>{bike.marca}</p>
                        <p className='modelo'>{bike.modelo}</p>
                        <p className='precio'>${bike.precio}</p>
                        <button className='botonDetalle' href="/">Detalle</button>
                    </div>
                    )
                })}
        </div>
    )
}

export default ItemList