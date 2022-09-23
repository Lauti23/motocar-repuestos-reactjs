import React from 'react'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { useCartContext } from '../../Context/CartContext';

const CartWidget = () => {
  
  const {totalProductos} = useCartContext()
  
  return (
    <>
      <LocalGroceryStoreIcon fontSize='large'/>
      <span>{totalProductos() || ''}</span>
    </>
  )
}

export default CartWidget