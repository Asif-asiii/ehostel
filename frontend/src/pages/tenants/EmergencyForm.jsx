import React, { useState } from 'react';

const EmergencyForm = () => {
  const [emergencyData, setEmergencyData] = useState({
    emergencyContactName: '',
    emergencyContactNumber: ''
  });

  const handleEmergencyChange = (e) => {
    setEmergencyData({
      ...emergencyData,
      [e.target.name]: e.target.value
    });
  };

  const handleEmergencySubmit = (e) => {
    e.preventDefault();
    console.log(emergencyData);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-8">
      <h2 className="text-2xl font-bold text-center mb-6">Emergency Information</h2>
      
      <form onSubmit={handleEmergencySubmit} className="space-y-6">
        {/* Emergency Contact Name */}
        <div>
          <label className="block text-sm font-medium">Emergency Contact Name</label>
          <input 
            type="text" 
            name="emergencyContactName" 
            value={emergencyData.emergencyContactName} 
            onChange={handleEmergencyChange} 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md" 
            placeholder="Enter emergency contact name" 
            required 
          />
        </div>

        {/* Emergency Contact Number */}
        <div>
          <label className="block text-sm font-medium">Emergency Contact Number</label>
          <input 
            type="text" 
            name="emergencyContactNumber" 
            value={emergencyData.emergencyContactNumber} 
            onChange={handleEmergencyChange} 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md" 
            placeholder="Enter emergency contact number" 
            required 
          />
        </div>

        {/* Submit Button */}
       {/*} <button type="submit" className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          Add Emergency Contact
  </button>*/}
      </form>
    </div>
  );
};

export default EmergencyForm;
