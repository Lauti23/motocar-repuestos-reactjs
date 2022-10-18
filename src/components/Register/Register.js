import { useAuth } from '../../Context/AuthContext' 
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Register.css'
import Swal from 'sweetalert2'


const Register = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value})
    }

    const [error, setError] = useState('')

    const navigate = useNavigate()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await registrarse(user.email, user.password)
            Swal.fire({
                icon: 'success',
                title: 'Usuario creado exitosamente',
                timer: 1500,
                showConfirmButton: false,
            })
            navigate('/')
        } catch (error) {
            setError(error.message)
        }
        
    }

    

    const {registrarse} = useAuth()


    return (
        <div className='LoginContainer'>

            

            <h1 className='register'>Registrarse</h1>
            {error && <p className='error'>{error}</p>}
            <form className='form' onSubmit={handleSubmit}>
                <fieldset className='fieldsetForm'>
                    <ul className='listForm'>
                        <li className='itemsForm'>
                            <label className='labelForm' htmlFor='email'>Correo Electrónico:</label>
                            <input className='inputForm' onChange={handleChange} type='text' name='email' placeholder='Ingresa tu e-mail'></input>
                        </li>
                        <li className='itemsForm'>
                            <label className='labelForm' htmlFor='password'>Contraseña:</label>
                            <input className='inputForm' onChange={handleChange} type='password' name='password' placeholder='Ingresa tu contraseña'></input>
                        </li>
                        <li className='itemsForm itemBtn'>
                            <button className='btnLogin'>REGISTRARSE</button>
                            <button className='btnGotAcc'>Ya tengo una cuenta</button>
                        </li>
                    </ul>
                </fieldset>


            </form>
        </div>
    )
}

export default Register