import React from 'react'
import './user-details.css'
function UserDetails() {
    const UserDetails =JSON.parse(localStorage.getItem('voosh'));

  return (
    <div className='user-details-card'>
    <h3>Demo Booking Already scheduled.</h3>
    <i style={{color:"#4BB543", fontSize:"100px",margin:"20px 0px"}} className="fa-regular fa-circle-check"></i>
       <p>we have already sent you the details through email </p> 
    <p>Check your Email: {UserDetails.email}</p>
    <p>Thank you for booking The demo  Voosh!</p>
    </div>
  )
}

export default UserDetails