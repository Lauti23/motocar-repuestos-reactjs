import React from 'react'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { useCartContext } from '../../Context/CartContext';
import './CartWidget.css'

const CartWidget = () => {
  
  const {totalProductos} = useCartContext()
  
  return (
    <div className='cartWidgetContainer'>
      <LocalGroceryStoreIcon fontSize='large'/>
      <p>{totalProductos() || ''}</p>
    </div>
  )
}

export default CartWidget