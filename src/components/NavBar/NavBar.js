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
                <Link to='/productos/honda'><li className='items'>HONDA</li></Link>
                <Link to='/productos/kawasaki'><li className='items'>KAWASAKI</li></Link>
                <Link to='/productos/ktm'><li className='items'>KTM</li></Link>
                <Link to='/productos/suzuki'><li className='items'>SUZUKI</li></Link>
                <Link to='/productos/yamaha'><li className='items'>YAMAHA</li></Link>
            </ul>
            <div className='userIcons'>
              <Link className='cartWidget' to='/cart'><CartWidget /></Link>
              <Link className='userIcon' to='/login'><PersonIcon fontSize='large'/></Link>
            </div>
        </nav>
      </header>
  )
}

export default NavBar