import React from 'react'
import honda from '../Home/logos/Honda-Logo.png'
import kawasaki from '../Home/logos/Kawasaki-logo-1.png'
import ktm from '../Home/logos/logo-KTM.png'
import suzuki from '../Home/logos/Suzuki-Logo.png'
import yamaha from '../Home/logos/Logo-Yamaha.png'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <h1 className='titleHome'>MOTOCAR REPUESTOS</h1>
            <p className='subtitleHome'>Lo mejor para los mejores</p>
            <div className='imageContainer'>
                <Link to='productos/honda'><img src={honda} alt="logo"></img></Link>
                <Link to='productos/kawasaki'><img src={kawasaki} alt="logo"></img></Link>
                <Link to='productos/ktm'><img src={ktm} alt="logo"></img></Link>
                <Link to='productos/suzuki'><img src={suzuki} alt="logo"></img></Link>
                <Link to='productos/yamaha'><img src={yamaha} alt="logo"></img></Link>
            </div>
        </>
    )
}

export default Home