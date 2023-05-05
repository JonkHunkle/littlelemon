import React,{useState} from 'react'
import ReservationForm from './ReservationForm'
import SuccessCard from './SuccessCard'
import Footer from './Footer'
import Header from './Header'

export default function ReservationPage() {
  const [reservation, setReservation]= useState({})

  return (<>
            <div style={{backgroundColor:'#495E57', display:'flex', flexDirection:'column', alignContent:'center', justifyContent:'start',  minHeight:'100svh'}}>
      <Header style={{placeSelf:'flex-start'}}/>
      <h1 className='visually-hidden'>Reservation Page</h1>
        <section className='reservation-banner'>
            <h2 className='display-text'>
                Chicago
            </h2>
            {/* <h3 className='sub-title'>
                Chicago
            </h3> */}
        </section>
        
       {reservation ? <ReservationForm reservation={reservation} setReservation={setReservation}/>
        :<SuccessCard/>}
    {/* <Footer/> */}
    <footer style={{placeSelf:'center', paddingTop:'2rsem'}}>If you have an account, please <strong className='secondary-text'>sign-in</strong></footer>
    </div>
    </>)
}
