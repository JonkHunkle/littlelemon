import React from 'react'
import foodImg from '../assets/Frame_20.svg'
import banner from '../assets/banner.svg'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className='hero'>
          <div className='hero-text'>
            <hgroup>
            <h2 className='display-text secondary-text'>Little Lemon</h2>
            <p className='sub-title'> Chicago</p>
            </hgroup>
            <p className='lead-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi illo magnam sequi enim quod? Facere, dolorum quam!</p>
            <a href='/reservation'className='button hero-btn section-title'>RESERVE A TABLE</a>
          </div>
          <img src={foodImg} alt='restaurant food' className='restaurant-food'/>
          <img src={banner} alt='restaurant food' className='banner'/>
        </section>
  )
}
