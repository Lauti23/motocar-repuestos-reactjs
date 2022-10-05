import React from 'react'
import honda from '../Home/logos/Honda-Logo.png'
import kawasaki from '../Home/logos/Kawasaki-logo-1.png'
import ktm from '../Home/logos/logo-KTM.png'
import suzuki from '../Home/logos/Suzuki-Logo.png'
import yamaha from '../Home/logos/Logo-Yamaha.png'
import './Home.css'
import Footer from '../../components/Footer/Footer'

const Home = () => {
    return (
        <>
            <h1 className='titleHome'>MOTOCAR REPUESTOS</h1>
            <p className='subtitleHome'>Lo mejor para los mejores</p>
            <div className='imageContainer'>
                <img src={honda} alt="logo"></img>
                <img src={kawasaki} alt="logo"></img>
                <img src={ktm} alt="logo"></img>
                <img src={suzuki} alt="logo"></img>
                <img src={yamaha} alt="logo"></img>
            </div>
        </>
        // <ItemListContainer/>
    )
}

export default Home