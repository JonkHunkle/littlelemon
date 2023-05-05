import React from 'react'
import logo from '../assets/Vector.svg'
import hamburger from '../assets/hamburger_menu.svg'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
      <img className='hamburger' src={hamburger} alt='hamburger menu'/>
      <Link to='/'><img className='logo' src={logo} alt='logo'/></Link>
      <ul className='nav'>
        <li>
        <a className='section-title' href='/'>Home</a>
        </li>
        <li>
        <a className='section-title' href="#about">About</a>
        </li>
        <li>
        <a className='section-title' href='/reservation'>Reservations</a>
        </li>
        <li>
        <a className='section-title' href='http://www.google.com' rel="noreferrer" target='_blank'>Order Online</a>
        </li>
        <li>
        <a className='section-title' href='http://www.google.com' rel="noreferrer" target='_blank'>Login</a>
        </li>
      </ul>
    </nav>
  )
}