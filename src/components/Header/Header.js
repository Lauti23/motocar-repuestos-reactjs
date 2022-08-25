import React from 'react'
import img from './logoMotocar.jpg'
import './Header.css'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import PersonIcon from '@mui/icons-material/Person';

const Header = () => {
  return (
    
        <nav className='nav'>
            <img src={img} alt="" className='logo'></img>
            
            <ul className='list'>
                <li className='items'><a href='/'>MOTOS</a></li>
                <li className='items'><a href='/'>REPUESTOS</a></li>
                <li className='items'><a href='/'>INDUMENTARIA</a></li>
            </ul>
            <div className='userIcons'>
              <a href='/'><LocalGroceryStoreIcon fontSize='large'/></a>
              <a href='/'><PersonIcon fontSize='large'/></a>
            </div>
        </nav>
    
  )
}

export default Header