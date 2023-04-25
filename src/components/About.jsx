import React from 'react'
import chefs from '../assets/Chefs.svg'

export default function About() {
  return (
    <section className='about-section'>
                <h2 className='visually-hidden'>About</h2>
        <div className="about-info">
            <hgroup>
                <h3 className='display-text'>Little Lemon</h3>
                <p className='sub-title'>Chicago</p>
            </hgroup>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit officia asperiores pariatur ea deserunt quia sed facilis adipisci repudiandae aut eos illo fugit repellendus, praesentium repellat architecto voluptatibus provident quasi?</p>
        </div>
        <img className='image-group' src={chefs} alt="chefs" />
    </section>
  )
}
