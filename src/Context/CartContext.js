import React, {useState, useContext} from 'react'

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
    
    console.log ('carrito: ', carrito)
    return (
        <CartContext.Provider value={{
            limpiarCarrito,
            enCarrito,
            borrarDelCarrito,
            agregarAlCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider