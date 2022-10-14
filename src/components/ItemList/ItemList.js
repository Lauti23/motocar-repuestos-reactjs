import React from 'react'
import './ItemList.css'
import Item from '../Item/Item'


const ItemList = ({bikes = []}) => {

    return (
        <>
            {bikes.map(bike => <Item key={bike.id} data={bike}/>)}
        </>
    )
}

export default ItemList