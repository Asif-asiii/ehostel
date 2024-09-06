import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddHostelForm = () => {
  const [formData, setFormData] = useState({
    hostelName: '',
    landlineNumber: '',
    mobileNumber: '',
    googleMapAddress: '',
    websiteAddress: '',
    socialMedia: '',
    hostelFor: '',
    address: '',
    email: '',
    attachments: null,
    admin: 'Admin 1', // Default value
    warden: 'Warden 1' // Default value
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'attachments') {
      setFormData({ ...formData, attachments: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    try {
      await axios.post('http://localhost:8000/hostels/add', form, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      // Handle success
      console.log('Hostel added successfully!');
      alert("Data is sent successfully");

      // Redirect to the /hostels route
      navigate('/hostels');
    } catch (error) {
      console.error('Error adding hostel:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-[#F0F0F0] shadow-lg rounded-lg p-8 w-full max-w-3xl transform transition-all duration-500 hover:scale-105">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#665529]">Add New Hostel</h2>
        {/* Form fields go here */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-[#665429] font-semibold mb-2">Hostel Name</label>
            <input type="text" name="hostelName" value={formData.hostelName} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" placeholder="Enter hostel name" required />
          </div>
          <div>
            <label className="block text-[#665429] font-semibold mb-2">Landline Number</label>
            <input type="text" name="landlineNumber" value={formData.landlineNumber} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" placeholder="Enter landline number" required />
          </div>
          <div>
            <label className="block text-[#665429] font-semibold mb-2">Mobile Number</label>
            <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" placeholder="Enter mobile number" required />
          </div>
          <div>
            <label className="block text-[#665429] font-semibold mb-2">Google Map Address</label>
            <input type="text" name="googleMapAddress" value={formData.googleMapAddress} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" placeholder="Enter Google Map Address" required />
          </div>
          <div>
            <label className="block text-[#665429] font-semibold mb-2">Website Address</label>
            <input type="text" name="websiteAddress" value={formData.websiteAddress} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" placeholder="Enter website address" required />
          </div>
          <div>
            <label className="block text-[#665429] font-semibold mb-2">Social Media</label>
            <input type="text" name="socialMedia" value={formData.socialMedia} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" placeholder="Enter social media" />
          </div>
          <div>
            <label className="block text-[#665429] font-semibold mb-2">Hostel For</label>
            <div className="flex items-center">
              <label className="mr-4">
                <input type="radio" name="hostelFor" value="male" checked={formData.hostelFor === 'male'} onChange={handleChange} required /> Male
              </label>
              <label className="mr-4">
                <input type="radio" name="hostelFor" value="female" checked={formData.hostelFor === 'female'} onChange={handleChange} required /> Female
              </label>
              <label>
                <input type="radio" name="hostelFor" value="both" checked={formData.hostelFor === 'both'} onChange={handleChange} required /> Both
              </label>
            </div>
          </div>
          <div>
            <label className="block text-[#665429] font-semibold mb-2">Address</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" placeholder="Enter address" required />
          </div>
          <div>
            <label className="block text-[#665429] font-semibold mb-2">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" placeholder="Enter email" required />
          </div>
          <div>
            <label className="block text-[#665429] font-semibold mb-2">Attachments</label>
            <input type="file" name="attachments" onChange={handleChange} className="w-full border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-[#665429] font-semibold mb-2">Select Admin</label>
            <select name="admin" value={formData.admin} onChange={handleChange} className="w-full border border-gray-300 rounded-lg">
              <option value="Admin 1">Admin 1</option>
              <option value="Admin 2">Admin 2</option>
            </select>
          </div>
          <div>
            <label className="block text-[#665429] font-semibold mb-2">Select Warden</label>
            <select name="warden" value={formData.warden} onChange={handleChange} className="w-full border border-gray-300 rounded-lg">
              <option value="Warden 1">Warden 1</option>
              <option value="Warden 2">Warden 2</option>
            </select>
          </div>
        </div>
        <button type="submit" className=" text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200" onSubmit={handleSubmit}>Add Hostel</button>
      </form>
    </div>
  );
};

export default AddHostelForm;
