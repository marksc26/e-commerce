import React from 'react'
import { NavLink } from 'react-router-dom'
import '../layout/styles/Header.css' 
import logo from '../assets/img/logo.png'
const Header = () => {
  return (
    <header className='header'>
        <NavLink className="header-pageName" to="/"><img src={logo} alt="" className='logo'/></NavLink>
        <ul className='header-navbar'>
            <li className='header-link'><NavLink to="/login"><i className='bx bx-user'></i></NavLink></li>
            <li className='header-link'><NavLink to="/purchases"><i className='bx bx-box'></i></NavLink></li>
            <li className='header-link'><NavLink to="/cart"><i className='bx bx-cart'></i></NavLink></li>
        </ul>

    </header>
  )
}

export default Header