import React from 'react'
import './ItemList.css'
import Item from '../Item/Item'
import {Link} from 'react-router-dom'

const ItemList = ({bikes}) => {

    // console.log(bikes)
    
    return (
    <div className="itemList">
        {bikes.map((bike) => {
            return (
                <div className='card'>
                    <img src={bike.imagen} alt='moto'></img>
                    <p>{bike.marca}</p>
                    <p>{bike.modelo}</p>
                    <p>{bike.precio}</p>
                </div>)
        })}
        
    </div>
    )
}

export default ItemList