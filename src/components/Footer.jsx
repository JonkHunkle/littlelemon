import React from 'react'
// import {Link} from 'react-router-dom';
import logo from '../assets/footer-logo.svg'

export default function Footer() {
  return (
    <footer className='footer'>
            <img className='footer-logo' src={logo} alt="Little Lemon logo"></img>
            <menu className='footer-nav'>
                <li className = "navigation" >
                    <h3 className="footer-header section-title">Navigation</h3>
                    <ul className="footer-links highlight">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href='/menu' target="_blank" rel="noreferrer">Menu</a>
                        </li>
                        <li>
                            <a href="/reservations">Reservations</a>
                        </li>
                        <li>
                            <a href="/order">Order</a>
                        </li>
                        <li>
                            <a href="/login">Login</a>
                        </li>
                    </ul>
                </li>
                <li className='contact'>
                    <h3 className="footer-header section-title">Contact</h3>
                    <ul className="footer-links highlight">
                        <li>2395 Maldove Way,</li>
                        <li>Chicago Illinois</li>
                        <li>(629)-243-6827</li>
                        <a href="mailto: info@littlelemon.com" target="_blank" rel="noreferrer">info@littlelemon.com</a>
                    </ul>
                </li>
                <li className='connect'>
                    <h3 className="footer-header section-title">Connect</h3>
                    <ul className="footer-links highlight">
                        <a href="https://www.facebook.com/thelittlelemonshop/" target="_blank" rel="noreferrer">Facebook</a>
                        <a href="https://www.instagram.com/littlelemonmoon/" target="_blank" rel="noreferrer">Instagram</a>
                        <a href="https://www.youtube.com/watch?v=3Li-FfypZYE" target="_blank" rel="noreferrer">Join us!</a>
                    </ul>
                </li>
            </menu>
        </footer>
  )
}
