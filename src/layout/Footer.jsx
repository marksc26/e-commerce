import React from 'react'
import './styles/Footer.css'
import devLogo from '../assets/img/devlogo.png'

const Footer = () => {
  return (
    <footer className='footer'>
        <p>Developed by:</p>
        <img src={devLogo} alt="" />
    </footer>
  )
}

export default Footer