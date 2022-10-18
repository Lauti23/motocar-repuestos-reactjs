import React, {useState} from 'react'
import './Login.css'
import { useAuth } from '../../Context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'
import Swal from 'sweetalert2'


const Login = () => {

    const [user, setUser] = useState({
    email: "",
    password: ""
})

const {login} = useAuth()

const navigate = useNavigate()

const [error, setError] = useState('')


const handleChange = ({target: {name, value}}) => {
    setUser({...user, [name]: value})
}

const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
        await login(user.email, user.password)
        Swal.fire({
            icon: 'success',
            title: 'Sesión iniciada',
            timer: 1500,
            showConfirmButton: false,
        })
        navigate('/')
    } catch (error) {
        setError(error.message)    
    }
}

    return (
        <div className='LoginContainer'>
            <h1 className='formTitle'>Iniciar Sesion</h1>
            {error && <p className='error'>{error}</p>}
            <form className='form' onSubmit={handleSubmit}>
                <fieldset className='fieldsetForm'>
                    <ul className='listForm'>
                        <li className='itemsForm'>
                            <label className='labelForm' htmlFor='email'>Correo Electrónico:</label>
                            <input className='inputForm' onChange={handleChange} type='email' name='email' placeholder='Ingresa tu e-mail'></input>
                        </li>
                        <li className='itemsForm'>
                            <label className='labelForm' htmlFor='password'>Contraseña:</label>
                            <input className='inputForm' onChange={handleChange} type='password' name='password' placeholder='Ingresa tu contraseña'></input>
                        </li>
                        <li className='itemsForm itemBtn'>
                            <button className='btnLogin'>Iniciar sesión</button>
                            <Link to='/register'><button className='btnNoAcc'>No tengo una cuenta</button></Link>
                        </li>
                    </ul>
                </fieldset>


            </form>
        </div>
    )
}

export default Login