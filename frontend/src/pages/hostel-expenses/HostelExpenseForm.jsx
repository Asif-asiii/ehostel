import React, { useState } from 'react';

const HostelExpenseForm = () => {
  const [expenseData, setExpenseData] = useState({
    hostel: '',
    date: '',
    expenseHead: '',
    expenseTitle: '',
    quantity: '',
    unit: '',
    unitPrice: '',
    amount: '',
    total: '',
    paymentStatus: 'paid',
    remarks: '',
    attachments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenseData({
      ...expenseData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(expenseData);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-8">
      <h2 className="text-2xl font-bold text-center mb-6">Expense Information</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Select Hostel */}
        <div>
          <label className="block text-sm font-medium">Select Hostel</label>
          <select 
            name="hostel" 
            value={expenseData.hostel} 
            onChange={handleChange} 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="">Select Hostel</option>
            <option value="hostel1">Hostel 1</option>
            <option value="hostel2">Hostel 2</option>
            <option value="hostel3">Hostel 3</option>
          </select>
        </div>

        {/* Date */}
        <div>
          <label className="block text-sm font-medium">Date</label>
          <input 
            type="date" 
            name="date" 
            value={expenseData.date} 
            onChange={handleChange} 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md" 
            required 
          />
        </div>

        {/* Expense Head */}
        <div>
          <label className="block text-sm font-medium">Expense Head</label>
          <input 
            type="text" 
            name="expenseHead" 
            value={expenseData.expenseHead} 
            onChange={handleChange} 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md" 
            placeholder="Enter expense head" 
            required 
          />
        </div>

        {/* Expense Title */}
        <div>
          <label className="block text-sm font-medium">Expense Title</label>
          <input 
            type="text" 
            name="expenseTitle" 
            value={expenseData.expenseTitle} 
            onChange={handleChange} 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md" 
            placeholder="Enter expense title" 
            required 
          />
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-sm font-medium">Quantity</label>
          <input 
            type="number" 
            name="quantity" 
            value={expenseData.quantity} 
            onChange={handleChange} 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md" 
            placeholder="Enter quantity" 
            required 
          />
        </div>

        {/* Unit */}
        <div>
          <label className="block text-sm font-medium">Unit</label>
          <select 
            name="unit" 
            value={expenseData.unit} 
            onChange={handleChange} 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="">Select Unit</option>
            <option value="kg">Kilogram</option>
            <option value="liter">Liter</option>
            <option value="piece">Piece</option>
          </select>
        </div>

        {/* Unit Price */}
        <div>
          <label className="block text-sm font-medium">Unit Price</label>
          <input 
            type="number" 
            name="unitPrice" 
            value={expenseData.unitPrice} 
            onChange={handleChange} 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md" 
            placeholder="Enter unit price" 
            required 
          />
        </div>

        {/* Amount */}
        <div>
          <label className="block text-sm font-medium">Amount</label>
          <input 
            type="number" 
            name="amount" 
            value={expenseData.amount} 
            onChange={handleChange} 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md" 
            placeholder="Enter amount" 
            required 
          />
        </div>

        {/* Total */}
        <div>
          <label className="block text-sm font-medium">Total</label>
          <input 
            type="number" 
            name="total" 
            value={expenseData.total} 
            onChange={handleChange} 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md" 
            placeholder="Enter total" 
            required 
          />
        </div>

        {/* Payment Status */}
        <div>
          <label className="block text-sm font-medium">Payment Status</label>
          <div className="flex space-x-4 mt-1">
            <label className="flex items-center">
              <input 
                type="radio" 
                name="paymentStatus" 
                value="paid" 
                checked={expenseData.paymentStatus === 'paid'} 
                onChange={handleChange} 
                className="mr-2" 
              />
              Paid
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="paymentStatus" 
                value="unpaid" 
                checked={expenseData.paymentStatus === 'unpaid'} 
                onChange={handleChange} 
                className="mr-2" 
              />
              Unpaid
            </label>
          </div>
        </div>

        {/* Remarks */}
        <div>
          <label className="block text-sm font-medium">Remarks</label>
          <textarea 
            name="remarks" 
            value={expenseData.remarks} 
            onChange={handleChange} 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md" 
            placeholder="Enter any remarks" 
            rows="3"
          />
        </div>

        {/* Attachments */}
        <div>
          <label className="block text-sm font-medium">Attachments</label>
          <input 
            type="file" 
            name="attachments" 
            onChange={handleChange} 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md" 
          />
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="mt-4 w-full bg-[#665429] text-white py-2 rounded-md hover:bg-[#7a6b3d]"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default HostelExpenseForm;
