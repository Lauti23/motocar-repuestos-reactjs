import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import products from '../mock/products'

const ItemDetailContainer = () => {
  
  const [data, setData] = useState({})
  
  const {detalleId} = useParams()
  
  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(products)
      }, 1500)
    })

    getData.then(res => setData(res.find(bike => bike.id === parseInt(detalleId))))
  }, [detalleId])

  const onAdd = (cantidad) => {
    
  }

  return (
    <ItemDetail data={data}/>
  )
}

export default ItemDetailContainer