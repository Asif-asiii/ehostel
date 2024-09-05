import React from 'react'
import ServiceForm from './ServiceForm'
import {useNavigate} from "react-router-dom"

const Services = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/add/service');
  }
  return (
    <div>
    <h1 className='mt-10 ml-5 text-3xl font-bold'>Services</h1>
    <button className='mt-5 ml-5 p-3 rounded bg-[#665429] text-white' onClick={handleClick}>Add New Service</button>
     
    </div>
  )
}

export default Services
