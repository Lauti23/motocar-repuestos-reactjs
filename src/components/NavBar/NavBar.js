import React from 'react'
import img from './logoMotocar.jpg'
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
                <Link to='/bikes'><li className='items'>MOTOS</li></Link>
                <li className='items'><a href='/'>REPUESTOS</a></li>
                <li className='items'><a href='/'>INDUMENTARIA</a></li>
            </ul>
            <div className='userIcons'>
              <a href='/'><CartWidget/></a>
              <a href='/'><PersonIcon fontSize='large'/></a>
            </div>
        </nav>
      </header>
  )
}

export default NavBar