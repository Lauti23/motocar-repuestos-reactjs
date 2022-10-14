import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore'

const ItemListContainer = () => {
    
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

    return (
        <>
        <main className='main'>
            <ItemList bikes={bikes} />
        </main>
        
        </>
    )
}

export default ItemListContainer