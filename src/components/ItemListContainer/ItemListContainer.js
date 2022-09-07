import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import productos from '../mock/productos'

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
            <ItemList bikes={bikes} />
        </main>
    )
}

export default ItemListContainer