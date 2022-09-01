import React from 'react'
import img from './logoMotocar.jpg'
import './NavBar.css'
import PersonIcon from '@mui/icons-material/Person';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    
        <nav className='nav'>
            <img src={img} alt="" className='logo'></img>
            
            <ul className='list'>
                <li className='items'><a href='/'>MOTOS</a></li>
                <li className='items'><a href='/'>REPUESTOS</a></li>
                <li className='items'><a href='/'>INDUMENTARIA</a></li>
            </ul>
            <div className='userIcons'>
              <a href='/'><CartWidget/></a>
              <a href='/'><PersonIcon fontSize='large'/></a>
            </div>
        </nav>
    
  )
}

export default NavBar