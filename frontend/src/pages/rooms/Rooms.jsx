import React from 'react'
import AddRoomTable from './AddRoomTable'
import { useNavigate } from 'react-router-dom'
import RoomTable from './RoomTable';

const Rooms = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/add/room");
  }
  return (
    <div>
      <h1 className='mt-10 p-5 font-bold text-3xl'>Rooms</h1>
      <button onClick={handleClick} className='mt-5  rounded bg-[#665429] text-[#F0F0F0] p-3 ml-5'>Add New Room</button>

      {/* for showing room table details */}
     {/*} <RoomTable/> */}
    </div>
  )
}

export default Rooms
