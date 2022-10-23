import { useCartContext } from '../../Context/CartContext'
import './Cart.css'
import { Link } from 'react-router-dom'
import ItemCart from '../ItemCart/ItemCart'
import {addDoc, collection, getFirestore} from 'firebase/firestore'
import { useAuth } from '../../Context/AuthContext'
import Swal from 'sweetalert2'
import Confirmacion from '../Confirmacion/Confirmacion'


const Cart = () => {

    const {carrito, precioTotal, limpiarCarrito} = useCartContext()

    const {user} = useAuth()

    const orden = {
        comprador: {
            email: user.email,
            
        },
        productos: carrito.map(producto => ({id: producto.id, title: producto.marca, price: producto.precio, cantidad: producto.cantidad})),
        total: precioTotal(),
    }

    console.log(orden)
    
    const terminarCompra = () => {
        const db = getFirestore()
        const ordenColeccion = collection(db, 'ordenes')
        addDoc(ordenColeccion, orden)
        .then(({id}) => Swal.fire({
            icon: 'success',
            title: `Compra realizada, con este codigo podras seguir tu envio: ${id}`,
            showConfirmButton: true,
        }))
        limpiarCarrito()
    }

    if (carrito.length === 0) {
        return (
            <div className='cart'>
                <div className='cartTitle'>
                    <h1 className='title'>CARRITO</h1>
                    <p className='sinProductos'>No hay productos en el carrito</p>
                    <Link to='/' className='linkTienda'>Ir a la tienda</Link>
                </div>
            </div>
        
    );
    }

    return (
        <div>
            <h1 className='cartTitle'>CARRITO</h1>
            {carrito.map(producto => <ItemCart key={producto.id} producto={producto} />)}
            <p className='totalPrice'>
                Total: ${precioTotal()}
            </p>
            <div className='btnContainer'>
                <button className='terminarCompra' onClick={terminarCompra}>Terminar compra</button>
            </div>
        </div>
    )
}

export default Cart