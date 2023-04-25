import React from 'react'
import star from '../assets/star.svg'
import jose from '../assets/Jose.svg'
import blair from '../assets/Blair.svg'
import christine from '../assets/Christine.svg'
import max from '../assets/Max.svg'

export default function Testimonials() {
  return (
    <section className='testimonials'>
          <h2 className='testimonial-header display-text'>
            Testimonials
          </h2>
          <ul className='user-testimonials'>
            <li className='testimonial-card'>
              <hgroup className='rating'>
              <h3 className='visually-hidden'>Rating</h3>
              <img src={star} alt='star'/>
              <img src={star} alt='star'/>
              <img src={star} alt='star'/>
              <img src={star} alt='star'/>
              <img src={star} alt='star'/>
                </hgroup>
              <div className='endorser'>
                <img alt='random person img' src={jose}/>
                <p className='card-titles'>Jose</p>
              </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className='testimonial-card'>
            <hgroup className='rating'>
              <h3 className='visually-hidden'>Rating</h3>
              <img src={star} alt='star'/>
              <img src={star} alt='star'/>
              <img src={star} alt='star'/>
              <img src={star} alt='star'/>
              <img src={star} alt='star'/>
                </hgroup>
              <div className='endorser'>
                <img src={blair} alt='random person img'/>
                <p className='card-titles'>Blair</p>
              </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className='testimonial-card'>
            <hgroup className='rating'>
              <h3 className='visually-hidden'>Rating</h3>
              <img src={star} alt='star'/>
              <img src={star} alt='star'/>
              <img src={star} alt='star'/>
              <img src={star} alt='star'/>
              <img src={star} alt='star'/>
                </hgroup>
              <div className='endorser'>
                <img src={max} alt='random person img'/>
                <p className='card-titles'>Max</p>
              </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className='testimonial-card'>
            <hgroup className='rating'>
              <h3 className='visually-hidden'>Rating</h3>
              <img src={star} alt='star'/>
              <img src={star} alt='star'/>
              <img src={star} alt='star'/>
              <img src={star} alt='star'/>
              <img src={star} alt='star'/>
                </hgroup>
              <div className='endorser'>
                <img src={christine} alt='random person img'/>
                <p className='card-titles'>Charley</p>
              </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </section>
  )
}
