import React, { useState } from 'react';

const AddBedForm = () => {
  const [formData, setFormData] = useState({
    bedTitle: '',
    bedNumber: '',
    room: '',
    monthlyRent: '',
    securityAmount: '',
    bedStatus: 'ready',
    remarks: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Add New Bed</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Bed Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Bed Title</label>
          <input 
            type="text" 
            name="bedTitle" 
            value={formData.bedTitle} 
            onChange={handleChange} 
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter bed title"
            required
          />
        </div>

        {/* Bed Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Bed Number</label>
          <input 
            type="number" 
            name="bedNumber" 
            value={formData.bedNumber} 
            onChange={handleChange} 
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter bed number"
            required
          />
        </div>

        {/* Select Room (Dropdown with dummy data) */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Select Room</label>
          <select 
            name="room" 
            value={formData.room} 
            onChange={handleChange} 
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">-- Select Room --</option>
            <option value="Room 101">Room 101</option>
            <option value="Room 102">Room 102</option>
            <option value="Room 103">Room 103</option>
          </select>
        </div>

        {/* Monthly Rent */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Monthly Rent</label>
          <input 
            type="number" 
            name="monthlyRent" 
            value={formData.monthlyRent} 
            onChange={handleChange} 
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter monthly rent"
            required
          />
        </div>

        {/* Security Amount */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Security Amount</label>
          <input 
            type="number" 
            name="securityAmount" 
            value={formData.securityAmount} 
            onChange={handleChange} 
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter security amount"
            required
          />
        </div>

        {/* Bed Status (Radio Buttons) */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Bed Status</label>
          <div className="mt-2 space-y-2">
            <label className="inline-flex items-center">
              <input 
                type="radio" 
                name="bedStatus" 
                value="ready" 
                checked={formData.bedStatus === 'ready'}
                onChange={handleChange} 
                className="form-radio text-blue-600"
              />
              <span className="ml-2">Ready</span>
            </label>
            <label className="inline-flex items-center">
              <input 
                type="radio" 
                name="bedStatus" 
                value="not ready" 
                checked={formData.bedStatus === 'not ready'}
                onChange={handleChange} 
                className="form-radio text-red-600"
              />
              <span className="ml-2">Not Ready</span>
            </label>
          </div>
        </div>

        {/* Remarks */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Remarks</label>
          <textarea 
            name="remarks" 
            value={formData.remarks} 
            onChange={handleChange} 
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter remarks"
            rows="3"
          ></textarea>
        </div>

        {/* Add New Bed Button */}
        <div className="text-center">
          <button 
            type="submit" 
            className="bg-[#665429] text-[#F0F0F0] py-2 px-4 rounded-md  focus:ring-2 focus:ring-[#665429] focus:ring-offset-2"
          >
            Add New Bed
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBedForm;
