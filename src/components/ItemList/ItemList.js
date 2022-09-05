import React from 'react'

const ItemList = ({bikes}) => {

    // console.log(bikes)
    
    bikes.map(bike => console.log(bike.marca[0]))
    
    return (
    <div className="itemList">ItemList</div>
    )
}

export default ItemList