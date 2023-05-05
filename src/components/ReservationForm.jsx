import React, {useState} from 'react'

export default function ReservationInfo({ reservation, setReservation}) {

  const [toggleComments, setToggleComments] = useState(false)


 const handleReservationChange=(e)=>{
  e.preventDefault()
  const {value, name}=e.target
  setReservation(prev=>{
    return {...prev, [name]:value}
  })
}

 const handleToggle=(e)=>{
setToggleComments(!toggleComments)
 }




  return (
    <form style={{ backgroundColor:'white', placeSelf:'center', alignItems:"center", display:'flex', flexDirection:"column",gap:'1rem', margin:'2rem', lineHeight:1.25, borderRadius:'1rem', minWidth:'75svw', padding:'1rem'}}>
      <h3>Reserve a table</h3>
         <label>
           Name: &nbsp;
           <input name="name" data-testid="name"type='text' onChange={handleReservationChange}/>
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
           <input name="date" type='date' onChange={handleReservationChange}/>
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
         <label>
           Comments: &nbsp;
           <input name="comments" type='checkbox' value={toggleComments} onClick={handleToggle}/>
         </label>
         {toggleComments&&(<>
         <textarea style={{width:'100%', marginTop:'.75rem'}} name="comments" type='text' onChange={handleReservationChange}/>
         </>
         )}
         
       <button style={{placeSelf:'center'}} type="submit">Submit</button>
    </form>
    
  )
}
