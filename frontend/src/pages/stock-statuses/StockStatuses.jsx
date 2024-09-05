import React from 'react'
import {useNavigate} from "react-router-dom"
const StockStatuses = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/add/stock/status');
  }
  return (
    <div>
    <h1 className='text-3xl mt-10 ml-5 font-bold'>Stock Status </h1>
    <button className='bg-[#665429] text-white mt-5 ml-5 rounded p-3' onClick={handleClick}>Add New Stock </button>
      
    </div>
  )
}

export default StockStatuses
