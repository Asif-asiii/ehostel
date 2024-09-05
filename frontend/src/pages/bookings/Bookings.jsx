import React from 'react'
import AddBooking from './AddBooking'
import {useNavigate} from "react-router-dom"

const Bookings = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/add/booking');
  }
  return (
    <div>
    <h1 className='text-3xl mt-10 ml-5 font-bold '>Bookings</h1>
    <button className='mt-5 ml-5 p-3 rounded bg-[#665429] text-[#f0f0f0]' onClick={handleClick}>Add New Booking</button>

    {/* table with bookings details fethced from backend */}
    </div>

  )
}

export default Bookings
