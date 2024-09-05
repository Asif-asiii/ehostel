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
       <h1 className='pt-7 text-3xl'>Hostels</h1>
       <button className='bg-[#665429] text-[#F0F0F0] rounded p-4 font-bold  mt-10' onClick={handleClick}>
         Add New Hostel
       </button>
        
       {/* table to show the hostels details */}
         <HostelTable/>

    </div>
  )
}

export default Hostels
