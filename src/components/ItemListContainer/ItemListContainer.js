import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import products from '../mock/products'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = () => {
    
    const [bikes , setBikes] = useState([])

    const {marcaId} = useParams()
    
    useEffect(() => {
        const getBikes = new Promise(resolve => {
            setTimeout(() => {
                resolve(products)
            }, 1500)
        })

        if (marcaId) {
            getBikes.then(res => setBikes(res.filter(bike => bike.marca === marcaId)))
        } else {
            getBikes.then(res => setBikes(res))
        }
    }, [marcaId])

    const onAdd = (cantidad) => {
        console.log(`Compraste ${cantidad} unidades`)
    } 

    return (
        <>
        <main className='main'>
            <ItemList bikes={bikes} />
            <ItemCount initial={1} stock={4} onAdd={onAdd}/>
        </main>
        
        </>
    )
}

export default ItemListContainer