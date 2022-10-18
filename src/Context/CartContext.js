import React, {useState, useContext, useEffect} from 'react'

const CartContext = React.createContext([])

export const useCartContext = () => useContext(CartContext)

const CartProvider = ({children}) => {
    
    const carritoLS = JSON.parse(localStorage.getItem("cart")) || "[]"
    
    const [carrito , setCarrito] = useState(carritoLS)

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(carrito))
    }, [carrito])
    
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
        return carrito.length
    }
    
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