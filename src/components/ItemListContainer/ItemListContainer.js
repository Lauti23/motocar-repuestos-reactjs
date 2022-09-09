import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import productos from '../mock/productos'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    
    const [bikes , setBikes] = useState([])

    const getProducts = () => new Promise((resolve, reject) => {
        setTimeout(() => resolve(productos), 2000)
    })

    useEffect(()=> {
        getProducts()
        .then(productos => setBikes(productos))
        .catch(error => console.error(error))
    }, [])
    // console.log(bikes)

    return (
        <main>
            <h1 className='titulo'>MOTOS</h1>
            <ItemList bikes={bikes} key={bikes.id} />
        </main>
    )
}

export default ItemListContainer