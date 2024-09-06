import React, { useState } from 'react';

const StockDemandsForm = () => {
  const [demandData, setDemandData] = useState({
    itemName: '',
    quantityRequested: '',
    supplier: '',
    dateNeeded: '',
    status: 'pending',
    remarks: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDemandData({
      ...demandData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(demandData);
    // Add logic to send demand data to the backend
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-[#f0f0f0] shadow-lg rounded-lg mt-8">
      <h2 className="text-2xl font-bold text-center mb-6">Stock Demands</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Item Name */}
        <div>
          <label className="block text-sm font-medium">Item Name</label>
          <input 
            type="text" 
            name="itemName" 
            value={demandData.itemName} 
            onChange={handleChange} 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md" 
            placeholder="Enter item name" 
            required 
          />
        </div>

        {/* Quantity Requested */}
        <div>
          <label className="block text-sm font-medium">Quantity Requested</label>
          <input 
            type="number" 
            name="quantityRequested" 
            value={demandData.quantityRequested} 
            onChange={handleChange} 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md" 
            placeholder="Enter quantity" 
            required 
          />
        </div>

        {/* Supplier */}
        <div>
          <label className="block text-sm font-medium">Supplier</label>
          <input 
            type="text" 
            name="supplier" 
            value={demandData.supplier} 
            onChange={handleChange} 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md" 
            placeholder="Enter supplier name" 
            required 
          />
        </div>

        {/* Date Needed */}
        <div>
          <label className="block text-sm font-medium">Date Needed</label>
          <input 
            type="date" 
            name="dateNeeded" 
            value={demandData.dateNeeded} 
            onChange={handleChange} 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md" 
            required 
          />
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium">Status</label>
          <select 
            name="status" 
            value={demandData.status} 
            onChange={handleChange} 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="completed">Completed</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        {/* Remarks */}
        <div>
          <label className="block text-sm font-medium">Remarks</label>
          <textarea 
            name="remarks" 
            value={demandData.remarks} 
            onChange={handleChange} 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md" 
            placeholder="Enter any remarks" 
            rows="3"
          />
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="mt-4 w-full bg-[#665429] text-white py-2 rounded-md "
        >
          Add Stock Demand
        </button>
      </form>
    </div>
  );
};

export default StockDemandsForm;
