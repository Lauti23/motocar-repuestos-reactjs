import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import products from '../mock/products'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {
    
    const [bikes , setBikes] = useState([])

    const {categoriaId} = useParams()
    
    useEffect(() => {
        const getBikes = new Promise(resolve => {
            setTimeout(() => {
                resolve(products)
            }, 1500)
        })

        if (categoriaId) {
            getBikes.then(res => setBikes(res.filter(bike => bike.categoria == categoriaId)))
        } else {
            getBikes.then(res => setBikes(res))
        }
    }, [categoriaId])

    return (
        <main className='main'>
            <ItemList bikes={bikes} />
        </main>
    )
}

export default ItemListContainer