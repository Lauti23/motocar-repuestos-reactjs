import React from 'react'
import img from './logoMotocar.png'
import './NavBar.css'
import PersonIcon from '@mui/icons-material/Person';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
      <header>
        <nav className='nav'>
            <Link to='/' className='logo'><img src={img} alt=""></img></Link>
            
            <ul className='list'>
                <Link to='/productos/motos'><li className='items'>MOTOS</li></Link>
                <Link to='/productos/repuestos'><li className='items'>REPUESTOS</li></Link>
                <Link to='/productos/indumentaria'><li className='items'>INDUMENTARIA</li></Link>
            </ul>
            <div className='userIcons'>
              <Link to='/cart'><CartWidget/></Link>
              <Link to='/login'><PersonIcon fontSize='large'/></Link>
            </div>
        </nav>
      </header>
  )
}

export default NavBar