import React, {useState, useContext} from 'react'
import Cart from '../components/Cart/Cart'

const CartContext = React.createContext([])

export const useCartContext = () => useContext(CartContext)

const CartProvider = ({children}) => {
    
    const [carrito , setCarrito] = useState([])
    
    const agregarAlCarrito = (item, cantidad) => {
        if (enCarrito(item.id)) {
            setCarrito(carrito.map(producto => {
                return producto.id === item.id ? {...producto, cantidad: producto.cantidad + cantidad} : producto
            }))
        } else {
            setCarrito([...carrito, {...item, cantidad}])
        }
    }
    
    const limpiarCarrito = () => {
        setCarrito([])
    }
    
    const enCarrito = (id) => {
        carrito.find(producto => producto.id === id)
    }

    const borrarDelCarrito = (id) => {
        setCarrito(carrito.filter(producto => producto.id !== id ))
    }

    const precioTotal = () => {
        return carrito.reduce((prev, act) => prev + act.cantidad * act.precio, 0);
    }

    const totalProductos = () => {
        carrito.reduce((acumulador, productoActual) => acumulador + productoActual.cantidad, 0)
    }
    
    console.log ('carrito: ', carrito)
    return (
        <CartContext.Provider value={{
            limpiarCarrito,
            enCarrito,
            borrarDelCarrito,
            agregarAlCarrito,
            precioTotal,
            totalProductos,
            carrito
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider