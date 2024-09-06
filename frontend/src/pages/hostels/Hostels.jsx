import React from 'react'
import { useNavigate } from 'react-router-dom';
import HostelTable from './HostelTable';

//this will direct to the add hostel page
const handleClick = () => {
  
}
const Hostels = () => {
  const navigate = useNavigate();

  //this will direct to the add hostel page
const handleClick = () => {
    navigate("/add/hostel")
}
  return (
    <div>
       <h1 className='text-3xl mt-10 ml-5 font-bold'>Hostels</h1>
       <button className='bg-[#665429] text-[#F0F0F0] rounded p-4 font-bold  mt-5 ml-5' onClick={handleClick}>
         Add New Hostel
       </button>
        
       {/* table to show the hostels details */}
         

    </div>
  )
}

export default Hostels
