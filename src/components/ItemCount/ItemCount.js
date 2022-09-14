import React, { useEffect, useState } from 'react'
import './ItemCount.css'


const ItemCount = ({initial, stock, onAdd}) => {
    
    const [counter, setCounter] = useState(parseInt(initial))

    const decrementar = () => {
        setCounter(counter - 1)
    }
    
    const incrementar = () => {
        setCounter(counter + 1)
    }

    useEffect(() => {
        setCounter(parseInt(initial))
    }, [initial])

    return (
        <>
            <div className='itemCount'>
                <button disabled={counter <= 1} onClick={decrementar} className='botones'>-</button>
                <span className='numero'>{counter}</span>
                <button disabled={counter >= stock } onClick={incrementar} className='botones'>+</button>
            </div>
            <div className='agregar'>
                <button disabled={stock <= 0} onClick={() => onAdd(counter)}>Agregar al carrito</button>
            </div>
        </>
    )
}

export default ItemCount