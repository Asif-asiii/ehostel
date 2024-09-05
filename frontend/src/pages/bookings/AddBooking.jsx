import React, { useState } from 'react';

const AddBooking = () => {
  const [bookingData, setBookingData] = useState({
    rentType: 'daily',
    tenant: '',
    room: '',
    bed: '',
    security: '',
    monthlyRent: '',
    checkInDate: '',
    checkOutDate: '',
    remarks: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData({
      ...bookingData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(bookingData);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-[#f0f0f0] shadow-lg rounded-lg mt-8">
      <h2 className="text-2xl font-bold text-center mb-6">Booking Information</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Rent Type */}
        <div>
          <label className="block text-sm font-medium">Rent Type</label>
          <div className="flex space-x-4 mt-1">
            <label className="flex items-center">
              <input 
                type="radio" 
                name="rentType" 
                value="daily" 
                checked={bookingData.rentType === 'daily'} 
                onChange={handleChange} 
                className="mr-2" 
              />
              Daily
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="rentType" 
                value="monthly" 
                checked={bookingData.rentType === 'monthly'} 
                onChange={handleChange} 
                className="mr-2" 
              />
              Monthly
            </label>
          </div>
        </div>

        {/* Select Tenant */}
        <div>
          <label className="block text-sm font-medium">Select Tenant</label>
          <select 
            name="tenant" 
            value={bookingData.tenant} 
            onChange={handleChange} 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Tenant</option>
            <option value="tenant1">Tenant 1</option>
            <option value="tenant2">Tenant 2</option>
            <option value="tenant3">Tenant 3</option>
          </select>
        </div>

        {/* Select Room */}
        <div>
          <label className="block text-sm font-medium">Select Room</label>
          <select 
            name="room" 
            value={bookingData.room} 
            onChange={handleChange} 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Room</option>
            <option value="room1">Room 1</option>
            <option value="room2">Room 2</option>
            <option value="room3">Room 3</option>
          </select>
        </div>

        {/* Select Bed */}
        <div>
          <label className="block text-sm font-medium">Select Bed</label>
          <select 
            name="bed" 
            value={bookingData.bed} 
            onChange={handleChange} 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Bed</option>
            <option value="bed1">Bed 1</option>
            <option value="bed2">Bed 2</option>
            <option value="bed3">Bed 3</option>
          </select>
        </div>

        {/* Security */}
        <div>
          <label className="block text-sm font-medium">Security Amount</label>
          <input 
            type="number" 
            name="security" 
            value={bookingData.security} 
            onChange={handleChange} 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md" 
            placeholder="Enter security amount" 
            required 
          />
        </div>

        {/* Monthly Rent */}
        <div>
          <label className="block text-sm font-medium">Monthly Rent</label>
          <input 
            type="number" 
            name="monthlyRent" 
            value={bookingData.monthlyRent} 
            onChange={handleChange} 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md" 
            placeholder="Enter monthly rent" 
            required 
          />
        </div>

        {/* Check-in Date */}
        <div>
          <label className="block text-sm font-medium">Check-in Date</label>
          <input 
            type="date" 
            name="checkInDate" 
            value={bookingData.checkInDate} 
            onChange={handleChange} 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md" 
            required 
          />
        </div>

        {/* Check-out Date */}
        <div>
          <label className="block text-sm font-medium">Check-out Date</label>
          <input 
            type="date" 
            name="checkOutDate" 
            value={bookingData.checkOutDate} 
            onChange={handleChange} 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md" 
            required 
          />
        </div>

        {/* Remarks */}
        <div>
          <label className="block text-sm font-medium">Remarks</label>
          <textarea 
            name="remarks" 
            value={bookingData.remarks} 
            onChange={handleChange} 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md" 
            placeholder="Enter any remarks" 
            rows="3"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="mt-4 w-full bg-[#665429] text-white py-2 rounded-md ">
          Add Booking
        </button>
      </form>
    </div>
  );
};

export default AddBooking;
