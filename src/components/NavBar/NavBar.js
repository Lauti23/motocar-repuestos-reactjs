import React from 'react'
import img from './logoMotocar.png'
import './NavBar.css'
import PersonIcon from '@mui/icons-material/Person';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
      <header>
        <nav className='nav'>
            <NavLink to='/' className='logo'><img src={img} alt=""></img></NavLink>
            
            <ul className='list'>
                <NavLink to='/productos/honda'><li className='items'>HONDA</li></NavLink>
                <NavLink to='/productos/kawasaki'><li className='items'>KAWASAKI</li></NavLink>
                <NavLink to='/productos/ktm'><li className='items'>KTM</li></NavLink>
                <NavLink to='/productos/suzuki'><li className='items'>SUZUKI</li></NavLink>
                <NavLink to='/productos/yamaha'><li className='items'>YAMAHA</li></NavLink>
            </ul>
            <div className='userIcons'>
              <NavLink to='/cart'><CartWidget/></NavLink>
              <NavLink to='/login'><PersonIcon fontSize='large'/></NavLink>
            </div>
        </nav>
      </header>
  )
}

export default NavBar