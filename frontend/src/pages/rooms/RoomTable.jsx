import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Assuming you are using Axios to fetch the data

const RoomTable = () => {
  const [roomData, setRoomData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    const fetchRoomData = async () => {
      try {
        const response = await axios.get('/api/rooms'); // Replace with your actual API endpoint
        setRoomData(response.data);
      } catch (error) {
        console.error("Error fetching room data:", error);
      }
    };

    fetchRoomData();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h2 className="text-2xl font-bold text-center mb-6">Room Details</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Room</th>
              <th className="py-3 px-6 text-left">Number of Beds</th>
              <th className="py-3 px-6 text-left">Floor</th>
              <th className="py-3 px-6 text-left">Details</th>
              <th className="py-3 px-6 text-left">Image</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {roomData.map((room, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">{room.room}</td>
                <td className="py-3 px-6 text-left">{room.beds}</td>
                <td className="py-3 px-6 text-left">{room.floor}</td>
                <td className="py-3 px-6 text-left">{room.details}</td>
                <td className="py-3 px-6 text-left">
                  <img src={room.image} alt="Room" className="w-16 h-16 object-cover rounded" />
                </td>
                <td className="py-3 px-6 text-center">
                  <button className="bg-blue-500 text-white py-1 px-3 rounded mr-2 hover:bg-blue-600">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RoomTable;
