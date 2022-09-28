import React, { useEffect, useState, useContext } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'
import { CartContext } from '../../App'
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore'

const ItemListContainer = () => {
    
    const nombre = useContext(CartContext);
    

    const [bikes , setBikes] = useState([])

    const {marcaId} = useParams()
    
    useEffect(() => {
        const querydb = getFirestore()
        const queryCollection = collection(querydb, 'motos')
        

        if (marcaId) {
            const queryFiltro = query(queryCollection, where('marca', '==', marcaId))
            getDocs(queryFiltro)
                .then(res => setBikes(res.docs.map(moto => ({id: moto.id, ...moto.data()}))))
        } else {
            getDocs(queryCollection)
                .then(res => setBikes(res.docs.map(moto => ({id: moto.id, ...moto.data()}))))
        }
    }, [marcaId])

    const onAdd = (cantidad) => {
        console.log(`Compraste ${cantidad} unidades`)
    } 

    return (
        <>
        <main className='main'>
            <ItemList bikes={bikes} />
        </main>
        
        </>
    )
}

export default ItemListContainer