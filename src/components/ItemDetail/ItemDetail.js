import React from 'react'

const ItemDetail = ({data}) => {
    return (
        <div className='dataDetail'>
            <div className='detail'>
                <img src={data.imagen} alt="moto"></img>
                <div className='detailContent'>
                    <h2>{data.marca}</h2>
                    <p>{data.modelo}</p>
                    <p>{data.precio}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail