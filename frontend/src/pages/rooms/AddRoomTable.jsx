import React, { useState } from 'react';

const AddRoomTable = () => {
  const [roomData, setRoomData] = useState({
    hostel: '',
    floor: '',
    room: '',
    beds: '',
    booked: '',
    hotWater: '',
    status: '',
    partitionedType: '',
    bath: '',
    window: '',
    balcony: '',
    ac: '',
    heater: '',
    furnished: '',
    remarks: '',
    attachments: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoomData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setRoomData((prevData) => ({
      ...prevData,
      attachments: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(roomData);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-[#f0f0f0] shadow-lg rounded-lg mt-10">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Add Room Details</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="hostel" className="block text-sm font-medium text-gray-700">Hostel</label>
            <select
              name="hostel"
              value={roomData.hostel}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select Hostel</option>
              <option value="Hostel 1">Hostel 1</option>
              <option value="Hostel 2">Hostel 2</option>
              <option value="Hostel 3">Hostel 3</option>
            </select>
          </div>

          <div>
            <label htmlFor="floor" className="block text-sm font-medium text-gray-700">Floor</label>
            <input
              type="number"
              name="floor"
              value={roomData.floor}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter Floor"
            />
          </div>

          <div>
            <label htmlFor="room" className="block text-sm font-medium text-gray-700">Room</label>
            <input
              type="text"
              name="room"
              value={roomData.room}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter Room"
            />
          </div>

          <div>
            <label htmlFor="beds" className="block text-sm font-medium text-gray-700">Number of Beds</label>
            <input
              type="number"
              name="beds"
              value={roomData.beds}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter Number of Beds"
            />
          </div>

          {[
            { name: 'booked', label: 'Booked' },
            { name: 'hotWater', label: 'Hot Water' },
            { name: 'status', label: 'Status' },
            { name: 'partitionedType', label: 'Partitioned Type' },
            { name: 'bath', label: 'Bath' },
            { name: 'window', label: 'Window' },
            { name: 'balcony', label: 'Balcony' },
            { name: 'ac', label: 'A/C' },
            { name: 'heater', label: 'Heater' },
            { name: 'furnished', label: 'Furnished' },
          ].map((field, index) => (
            <div key={index}>
              <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">{field.label}</label>
              <select
                name={field.name}
                value={roomData[field.name]}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          ))}

          <div>
            <label htmlFor="remarks" className="block text-sm font-medium text-gray-700">Remarks</label>
            <textarea
              name="remarks"
              value={roomData.remarks}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter Remarks"
            />
          </div>

          <div>
            <label htmlFor="attachments" className="block text-sm font-medium text-gray-700">Attachments</label>
            <input
              type="file"
              name="attachments"
              onChange={handleFileChange}
              className="mt-1 block w-full text-sm text-gray-500 border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#665429] text-[#F0F0F0] px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Add Room
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRoomTable;
