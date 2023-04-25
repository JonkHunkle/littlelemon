import React from 'react'
import lemonDesert from '../assets/lemondessert.jpg'
import bruschetta from '../assets/bruschetta.png'
import greekSalad from '../assets/greeksalad.jpg'
import delivery from '../assets/delivery.svg'

export default function Specials() {
  return (
    <section className='specials'>
          <div className='specials-header'>
          <h2 className='display-text'>This Weeks Specials!</h2>
          <button className='specials-btn sub-title' onClick={()=>console.log('online-menu-btn')}>Online Menu</button>
          </div>
            <ul className='specials-list'>
              <li className='dish-card'>
                <img src={greekSalad} alt='dish' className='food-image'/>
                <div className='dish-details'>
                <hgroup className='card-header'>
                  <h3 className='section-title'>Greek Salad</h3>
                  <p className='price'>$12.99</p>
                </hgroup>
                <p className='card-info'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus eos consectetur voluptas in?</p>
                <div className='card-delivery'>
                  <p className='section-categories'href='/'>order delivery</p>
                  <a href='/'>
                  <img src={delivery} alt='delivery icon'/>
                  </a>
                </div>
                </div>
              </li>
              <li className='dish-card'>
                <img src={bruschetta} alt='dish' className='food-image'/>
                <div className='dish-details'>
                <hgroup className='card-header'>
                  <h3 className='section-title'>Bruchetta</h3>
                  <p className='price'>$5.99</p>
                </hgroup>
                <p className='card-info'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus eos consectetur voluptas in?</p>
                <div className='card-delivery'>
                  <p className='section-categories'href='/'>order delivery</p>
                  <a href='/'>
                  <img src={delivery} alt='delivery icon'/>
                  </a>
                </div>
                </div>
              </li>
              <li className='dish-card'>
                <img src={lemonDesert} alt='dish' className='food-image'/>
                <div className='dish-details'>
                <hgroup className='card-header'>
                  <h3 className='section-title'>Lemon Dessert</h3>
                  <p className='price'>$5.00</p>
                </hgroup>
                <p className='card-info'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus eos consectetur voluptas in?</p>
                <div className='card-delivery'>
                  <p className='section-categories'>order delivery</p>
                  <a href='/'>
                  <img src={delivery} alt='delivery icon'/>
                  </a>
                </div>
                </div>
              </li>
              
            </ul>
        </section>
  )
}
