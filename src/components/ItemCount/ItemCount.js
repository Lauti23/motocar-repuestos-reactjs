import React, {useState} from 'react'
import './ItemCount.css'

const ItemCount = () => {
    let stock = 7
    const [counter, setCounter] = useState(0)

    const counterUp = () => {
        if (counter < stock) {
            setCounter(counter + 1)
        } 
        }
    
    const counterDown = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        } else {
            setCounter(counter = 0)
        }
    }
    return (
        <>
            <h1>Contador</h1>
            <div className='contadorContainer'>
                <button onClick={counterUp}>+</button>
                <p>{counter}</p>
                <button onClick={counterDown}>-</button>
            </div>
        </>
    )
}

export default ItemCount