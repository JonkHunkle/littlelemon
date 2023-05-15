import React,{useEffect, useState} from 'react'
import ReservationForm from './ReservationForm'
import Header from './Header'
import * as reservationAPI from '../bookingAPI'

export default function ReservationPage() {
const [dates, setDates]= useState(undefined)
console.log(dates)
useEffect(()=>{
setDates(reservationAPI.fetchAPI(new Date()))
},[])

  return (<>
            <div style={{backgroundColor:'#495E57', display:'flex', flexDirection:'column', alignContent:'center', justifyContent:'start', minHeight:'100svh'}}>
      <Header style={{placeSelf:'flex-start'}}/>
      <h1 className='visually-hidden'>Reservation Page</h1>
        <section className='reservation-banner'>
            <h2 className='display-text'>
                Chicago
            </h2>
        </section>
        
       <ReservationForm dates={dates}/>
        
    <footer style={{placeSelf:'center', paddingTop:'2rsem'}}>If you have an account, please <strong className='secondary-text'>sign-in</strong></footer>
    </div>
    </>)
}
