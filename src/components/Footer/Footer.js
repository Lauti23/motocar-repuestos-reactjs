import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <p className='footerName'>MOTOCAR REPUESTOS</p>
                <p className='footerRights'>TODOS LOS DERECHOS RESERVADOS - 2022</p>
                <div className='socialMedia'>
                    <p>SEGUINOS EN NUESTRAS REDES SOCIALES</p>
                    <div className='icons'>
                        <Link to='/'><i className="fa-brands fa-instagram"></i></Link>
                        <Link to='/'><i className="fa-brands fa-square-facebook"></i></Link>
                        <Link to='/'><i className="fa-brands fa-square-whatsapp"></i></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer