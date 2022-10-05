import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <p className='footerName'>MOTOCAR REPUESTOS</p>
                <p className='footerRights'>TODOS LOS DERECHOS RESERVADOS - 2022</p>
                <div className='socialMedia'>
                    <p>SEGUINOS EN NUESTRAS REDES SOCIALES</p>
                    <div className='icons'>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-square-facebook"></i>
                        <i className="fa-brands fa-square-whatsapp"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer