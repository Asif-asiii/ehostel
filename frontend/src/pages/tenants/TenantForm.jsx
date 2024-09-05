import React, { useState } from 'react';
import GuardianForm from './GuardianForm';
import EmergencyForm from './EmergencyForm';

const TenantForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    userName: '',
    email: '',
    dateOfBirth: '',
    contact: '',
    cnic: '',
    gender: '',
    nationality: '',
    province: '',
    country: '',
    profession: '',
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
    console.log(formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-[#F0F0F0] shadow-lg rounded-lg mt-5">
      <h2 className="text-2xl font-bold text-center mb-6">Tenant Information</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md" 
            placeholder="Enter full name" 
            required 
          />
        </div>

        {/* User Name */}
        <div>
          <label className="block text-sm font-medium">User Name</label>
          <input 
            type="text" 
            name="userName" 
            value={formData.userName} 
            onChange={handleChange} 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md" 
            placeholder="Enter user name" 
            required 
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md" 
            placeholder="Enter email" 
            required 
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-sm font-medium">Date of Birth</label>
          <input 
            type="date" 
            name="dateOfBirth" 
            value={formData.dateOfBirth} 
            onChange={handleChange} 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md" 
            required 
          />
        </div>

        {/* Contact */}
        <div>
          <label className="block text-sm font-medium">Contact</label>
          <input 
            type="text" 
            name="contact" 
            value={formData.contact} 
            onChange={handleChange} 
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
            value={formData.cnic} 
            onChange={handleChange} 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md" 
            placeholder="Enter CNIC number" 
            required 
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium">Gender</label>
          <div className="mt-2 space-x-4">
            <label className="inline-flex items-center">
              <input 
                type="radio" 
                name="gender" 
                value="male" 
                onChange={handleChange} 
                className="form-radio"
                required 
              />
              <span className="ml-2">Male</span>
            </label>
            <label className="inline-flex items-center">
              <input 
                type="radio" 
                name="gender" 
                value="female" 
                onChange={handleChange} 
                className="form-radio" 
                required 
              />
              <span className="ml-2">Female</span>
            </label>
          </div>
        </div>

        {/* Nationality */}
        <div>
          <label className="block text-sm font-medium">Nationality</label>
          <input 
            type="text" 
            name="nationality" 
            value={formData.nationality} 
            onChange={handleChange} 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md" 
            placeholder="Enter nationality" 
            required 
          />
        </div>

        {/* Province */}
        <div>
          <label className="block text-sm font-medium">Select Province</label>
          <select 
            name="province" 
            value={formData.province} 
            onChange={handleChange} 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md" 
            required
          >
            <option value="">-- Select Province --</option>
            <option value="KPK">KPK</option>
            <option value="Balouchistan">Balouchistan</option>
            <option value="Punjab">Punjab</option>
            <option value="Sindh">Sindh</option>
          </select>
        </div>

        {/* Country */}
        <div>
          <label className="block text-sm font-medium">Country</label>
          <input 
            type="text" 
            name="country" 
            value={formData.country} 
            onChange={handleChange} 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md" 
            placeholder="Enter country" 
            required 
          />
        </div>

        {/* Profession */}
        <div>
          <label className="block text-sm font-medium">Profession</label>
          <div className="mt-2 space-x-4">
            <label className="inline-flex items-center">
              <input 
                type="radio" 
                name="profession" 
                value="student" 
                onChange={handleChange} 
                className="form-radio" 
              />
              <span className="ml-2">Student</span>
            </label>
            <label className="inline-flex items-center">
              <input 
                type="radio" 
                name="profession" 
                value="govt job" 
                onChange={handleChange} 
                className="form-radio" 
              />
              <span className="ml-2">Govt Job</span>
            </label>
            <label className="inline-flex items-center">
              <input 
                type="radio" 
                name="profession" 
                value="private job" 
                onChange={handleChange} 
                className="form-radio" 
              />
              <span className="ml-2">Private Job</span>
            </label>
            <label className="inline-flex items-center">
              <input 
                type="radio" 
                name="profession" 
                value="business" 
                onChange={handleChange} 
                className="form-radio" 
              />
              <span className="ml-2">Business</span>
            </label>
          </div>
        </div>

        {/* Remarks */}
        <div>
          <label className="block text-sm font-medium">Remarks</label>
          <textarea 
            name="remarks" 
            value={formData.remarks} 
            onChange={handleChange} 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md" 
            placeholder="Enter remarks"
            rows="3"
          ></textarea>
        </div>

        <GuardianForm/>
        <EmergencyForm/>
        {/* Submit Button */}
        <button type="submit" className="mt-4 w-full bg-[#665429] text-white py-2 rounded-md hover:bg-blue-600">
          Add Tenant
        </button>
      </form>
    </div>
  );
};

export default TenantForm;
