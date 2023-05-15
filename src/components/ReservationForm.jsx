import React, { useState} from 'react'

export default function ReservationInfo({dates}) {

  const [reservation, setReservation]= useState({})


 const handleReservationChange=(e)=>{
  e.preventDefault()
  const {value, name}=e.target
  setReservation(prev=>{
    return {...prev, [name]:value}
  })
}


const handleSubmit=(e)=>{
  e.preventDefault()
  console.log(reservation)
}


const showDates = ()=>{
  return dates?.map(date=>
    <option value={date}>{date}</option>
  )
}

  return (
    <form className='reservation-form'>
      <h3>Reserve a table</h3>
         <label>
           Name:
           <input name="name" data-testid='name' type='text' onChange={handleReservationChange}/>
         </label>
         <label>
           Phone: &nbsp;
           <input name="phone" type='tel' onChange={handleReservationChange}/>
         </label>
         <label>
           Email: &nbsp;
           <input name="email" type='email' onChange={handleReservationChange}/>
         </label>
         <label>
           Date: &nbsp;
           <select name="date" type='date' onChange={handleReservationChange}>
           {showDates()}
</select>
         </label>
         <label>
           Time: &nbsp;
           <input name="time" type='time' onChange={handleReservationChange}/>
         </label>
         <label>
           Guests: &nbsp;
           <input name="guests" type='number' placeholder="1" min="1" max="10"  onChange={handleReservationChange}/>
         </label>
         <label>
           Occasion: &nbsp;
           <input name="occasion" type='text' onChange={handleReservationChange}/>
         </label>
       <button style={{placeSelf:'center'}} data-testid='btn' type="submit" onClick={handleSubmit}>Submit</button>
    </form>
    
  )
}
