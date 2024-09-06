import React from 'react'
import {useNavigate} from "react-router-dom"
const StockDemands = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/add/stock/demand')
  }
  return (
    <div>
    <h1 className='mt-10 ml-5 text-3xl font-bold'>Stock Demands</h1>
    <button className='mt-5 ml-5 p-3 rounded bg-[#665429] text-white' onClick={handleClick}>Add New Stock Demand</button>

    {/* table with details fetched from backend */}
    </div>
  )
}

export default StockDemands
