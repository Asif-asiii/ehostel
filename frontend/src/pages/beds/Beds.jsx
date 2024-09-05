import React from 'react'
import AddBedForm from './AddBedForm'
import {useNavigate} from "react-router-dom"

const Beds = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/add/bed');
  }
  return (
    <div>
    <h1 className='mt-10 ml-5 text-3xl text-[#665429]'>Beds</h1>
    <button className='mt-10 ml-5 p-3 bg-[#665429] text-[#F0F0F0] rounded ' onClick={handleClick}>Add New Bed</button>
      {/* table details about beds */}
    </div>
  )
}

export default Beds
