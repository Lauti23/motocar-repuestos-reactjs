import React, {useState} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { Link } from 'react-router-dom'
import {useCartContext} from '../../Context/CartContext'


const ItemDetail = ({data}) => {
    
    const [carrito, setCarrito] = useState(false)

    const {agregarAlCarrito} = useCartContext()

    const onAdd = (cantidad) => {
        setCarrito(true);
        agregarAlCarrito(data, cantidad)
    } 
    
    return (
        <>
            <main className='main'>
                <div className='detail'>
                    <img className='imagen' src={data.imagen} alt="moto"></img>
                    <div className='detailContent'>
                        <h2 className='marcaDetail'>{data.marca}</h2>
                        <p className='modeloDetail'>{data.modelo}</p>
                        <p className='descripcionDetail'>{data.descripcion}</p>
                        <p className='precioDetail'>${data.precio}</p>
                        {
                            carrito
                            ? <Link className='linkCarrito' to='/cart'><button>Finalizar compra</button></Link>
                            : <ItemCount initial={1} stock={4} onAdd={onAdd}/>
                        }
                    </div>
                </div>
            </main>
        </>
    )
}

export default ItemDetail