import React from 'react'
import logo from '../assets/Vector.svg'
import hamburger from '../assets/hamburger_menu.svg'

export default function Nav() {
  return (
    <nav>
      <img className='hamburger' src={hamburger} alt='hamburger menu'/>
      <img className='logo' src={logo} alt='logo'/>
      <ul className='nav'>
        <li>
        <a className='section-title' href='http://www.google.com' rel="noreferrer" target='_blank'>Home</a>
        </li>
        <li>
        <a className='section-title' href='http://www.google.com' rel="noreferrer" target='_blank'>About</a>
        </li>
        <li>
        <a className='section-title' href='http://www.google.com' rel="noreferrer" target='_blank'>Reservations</a>
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