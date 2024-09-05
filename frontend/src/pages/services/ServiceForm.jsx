import React, { useState } from 'react';

const ServiceForm = () => {
  const [serviceData, setServiceData] = useState({
    serviceType: '',
    servicePrice: '',
    charged: 'monthly',
    hostel: '',
    remarks: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setServiceData({
      ...serviceData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(serviceData);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-[#f0f0f0] shadow-lg rounded-lg mt-8">
      <h2 className="text-2xl font-bold text-center mb-6">Service Information</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Service Type */}
        <div>
          <label className="block text-sm font-medium">Service Type</label>
          <input 
            type="text" 
            name="serviceType" 
            value={serviceData.serviceType} 
            onChange={handleChange} 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md" 
            placeholder="Enter service type" 
            required 
          />
        </div>

        {/* Service Price */}
        <div>
          <label className="block text-sm font-medium">Service Price</label>
          <input 
            type="number" 
            name="servicePrice" 
            value={serviceData.servicePrice} 
            onChange={handleChange} 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md" 
            placeholder="Enter service price" 
            required 
          />
        </div>

        {/* Charged */}
        <div>
          <label className="block text-sm font-medium">Charged</label>
          <div className="flex space-x-4 mt-1">
            <label className="flex items-center">
              <input 
                type="radio" 
                name="charged" 
                value="monthly" 
                checked={serviceData.charged === 'monthly'} 
                onChange={handleChange} 
                className="mr-2" 
              />
              Monthly
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="charged" 
                value="numberOfUsage" 
                checked={serviceData.charged === 'numberOfUsage'} 
                onChange={handleChange} 
                className="mr-2" 
              />
              Number of Usage
            </label>
          </div>
        </div>

        {/* Hostel Selection */}
        <div>
          <label className="block text-sm font-medium">Hostel</label>
          <select 
            name="hostel" 
            value={serviceData.hostel} 
            onChange={handleChange} 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Hostel</option>
            <option value="hostel1">Hostel 1</option>
            <option value="hostel2">Hostel 2</option>
            <option value="hostel3">Hostel 3</option>
          </select>
        </div>

        {/* Remarks */}
        <div>
          <label className="block text-sm font-medium">Remarks</label>
          <textarea 
            name="remarks" 
            value={serviceData.remarks} 
            onChange={handleChange} 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md" 
            placeholder="Enter any remarks" 
            rows="3"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="mt-4 w-full bg-[#665429] text-white py-2 rounded-md ">
          Add Service
        </button>
      </form>
    </div>
  );
};

export default ServiceForm;
