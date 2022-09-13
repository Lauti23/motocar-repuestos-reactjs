import React from 'react'
import { useParams } from 'react-router-dom'


const ItemDetail = ({data}) => {
    

    return (
        <div className='dataDetail'>
            <div className='detail'>
                <img src={data.imagen} alt="moto"></img>
                <div className='detailContent'>
                    <h2>{data.marca}</h2>
                    <p>{data.producto}</p>
                    <p>{data.modelo}</p>
                    <p>{data.descripcion}</p>
                    <p>{data.precio}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail