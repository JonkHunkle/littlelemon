import React from 'react'
import foodImg from '../assets/Frame_20.svg'
import banner from '../assets/banner.svg'

export default function Hero() {
  return (
    <section className='hero'>
          <div className='hero-text'>
            <hgroup>
            <h2 className='display-text secondary-text'>Little Lemon</h2>
            <p className='sub-title'> Chicago</p>
            </hgroup>
            <p className='lead-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi illo magnam sequi enim quod? Facere, dolorum quam!</p>
            <button className='hero-btn section-title' onClick={()=>console.log('reserve-btn')}>RESERVE A TABLE</button>
          </div>
          <img src={foodImg} alt='restaurant food' className='restaurant-food'/>
          <img src={banner} alt='restaurant food' className='banner'/>
        </section>
  )
}
