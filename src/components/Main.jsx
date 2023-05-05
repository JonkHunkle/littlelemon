import React from 'react'
import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';
import Footer from './Footer';
import Header from './Header';

export default function Main() {
  return (
    <main>
      <Header/>
        <Hero/>
        <Specials/>
        <Testimonials/>
        <About/>
        <Footer/>
    </main>
  )
}
