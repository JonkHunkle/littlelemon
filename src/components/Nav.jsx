import React from 'react'
import img from '../assets/Vector.svg'

export default function Nav() {
  return (
    <nav>
        <ul >
          <li>
            <img src={img} alt='logo'/>
          </li>
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