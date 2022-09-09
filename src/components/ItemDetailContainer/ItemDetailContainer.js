import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import productos from '../mock/productos'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})

    const {motoId} = useParams()
    
    useEffect(() => {
        const getItem = new Promise (resolve => {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        })

        if(motoId) {
          getItem.then(res => res.filter(item => item.id === motoId))
        } else {
          getItem.then(res => setItem(res))
        }
    }, {motoId})
  return (
    <ItemDetail data={item} />
  )
}

export default ItemDetailContainer