import React from 'react'
import AddTenant from './AddTenant'
import {useNavigate} from "react-router-dom"
const Tenants = () => {
  const navigate = useNavigate();
  const handleClick = () => {
   navigate("/add/tenant");
  }
  return (
    <div>
    <h1 className='text-3xl text-[#665429] mt-10 ml-5'>Tenant</h1>
    <button className='bg-[#665429] text-[#F0F0F0] p-3 mt-5 ml-5 rounded' onClick={handleClick}>Add Tenant</button>
   
    {/* table about the tenant details will come from backend */}
    </div>
  )
}

export default Tenants
