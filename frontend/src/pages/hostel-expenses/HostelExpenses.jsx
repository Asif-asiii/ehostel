import React from 'react'
import HostelExpenseForm from './HostelExpenseForm'
import {useNavigate} from "react-router-dom"
const HostelExpenses = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/add/hostel/expenseform');
  }
  return (
    <div>
      <h1 className='mt-10 ml-5 text-3xl text-[#665429]'>Hostel Expense Information</h1>
      <button className='mt-5 ml-5 rounded p-3 bg-[#665429] text-white' onClick={handleClick}>Add New Expense</button>
       
      {/* table with hostel expense details will be fetched from backend */}
    </div>
  )
}

export default HostelExpenses
