import React, { useState } from 'react';

const GuardianForm = () => {
  const [guardianData, setGuardianData] = useState({
    guardianName: '',
    relation: '',
    contact: '',
    cnic: ''
  });

  const handleGuardianChange = (e) => {
    setGuardianData({
      ...guardianData,
      [e.target.name]: e.target.value
    });
  };

  const handleGuardianSubmit = (e) => {
    e.preventDefault();
    console.log(guardianData);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-8">
      <h2 className="text-2xl font-bold text-center mb-6">Guardian Information</h2>
      
      <form onSubmit={handleGuardianSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Guardian Name */}
          <div>
            <label className="block text-sm font-medium">Guardian Name</label>
            <input 
              type="text" 
              name="guardianName" 
              value={guardianData.guardianName} 
              onChange={handleGuardianChange} 
              className="mt-1 w-full p-2 border border-gray-300 rounded-md" 
              placeholder="Enter guardian name" 
              required 
            />
          </div>

          {/* Relation */}
          <div>
            <label className="block text-sm font-medium">Relation</label>
            <input 
              type="text" 
              name="relation" 
              value={guardianData.relation} 
              onChange={handleGuardianChange} 
              className="mt-1 w-full p-2 border border-gray-300 rounded-md" 
              placeholder="Enter relation" 
              required 
            />
          </div>

          {/* Contact */}
          <div>
            <label className="block text-sm font-medium">Contact</label>
            <input 
              type="text" 
              name="contact" 
              value={guardianData.contact} 
              onChange={handleGuardianChange} 
              className="mt-1 w-full p-2 border border-gray-300 rounded-md" 
              placeholder="Enter contact number" 
              required 
            />
          </div>

          {/* CNIC */}
          <div>
            <label className="block text-sm font-medium">CNIC</label>
            <input 
              type="text" 
              name="cnic" 
              value={guardianData.cnic} 
              onChange={handleGuardianChange} 
              className="mt-1 w-full p-2 border border-gray-300 rounded-md" 
              placeholder="Enter CNIC number" 
              required 
            />
          </div>
        </div>

        {/* Submit Button */}
        {/* Uncomment if you want to use the submit button */}
        {/* <button type="submit" className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          Add Guardian
        </button> */}
      </form>
    </div>
  );
};

export default GuardianForm;
