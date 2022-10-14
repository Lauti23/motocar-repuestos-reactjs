import * as React from 'react';
import './Item.css'
import { Link } from 'react-router-dom';

const Item = ({data}) => {

    return (
        <>
            
            <div className='card'>
                <img src={data.imagen} alt='imagenMoto'></img>
                <div className='cardContent'>
                    <p className='marca'>{data.marca}</p>
                    <p className='modelo'>{data.modelo}</p>
                    <p className='precio'>${data.precio}</p>
                    <Link className='link' to={`/detalle/${data.id}`}>
                        <button className='btnDetalle'>DETALLE</button>
                    </Link> 
                </div>                       
            </div>
        </>
    );
}

export default Item
