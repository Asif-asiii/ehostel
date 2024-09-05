import React, { useState } from 'react';

const StockStatusesForm = () => {
  const [stockData, setStockData] = useState({
    itemName: '',
    category: '',
    quantity: '',
    unitOfMeasure: '',
    stockStatus: 'in-stock',
    supplier: '',
    remarks: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStockData({
      ...stockData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(stockData);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-8">
      <h2 className="text-2xl font-bold text-center mb-6">Stock Statuses</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Item Name */}
        <div>
          <label className="block text-sm font-medium">Item Name</label>
          <input 
            type="text" 
            name="itemName" 
            value={stockData.itemName} 
            onChange={handleChange} 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md" 
            placeholder="Enter item name" 
            required 
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium">Category</label>
          <input 
            type="text" 
            name="category" 
            value={stockData.category} 
            onChange={handleChange} 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md" 
            placeholder="Enter category" 
            required 
          />
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-sm font-medium">Quantity</label>
          <input 
            type="number" 
            name="quantity" 
            value={stockData.quantity} 
            onChange={handleChange} 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md" 
            placeholder="Enter quantity" 
            required 
          />
        </div>

        {/* Unit of Measure */}
        <div>
          <label className="block text-sm font-medium">Unit of Measure</label>
          <select 
            name="unitOfMeasure" 
            value={stockData.unitOfMeasure} 
            onChange={handleChange} 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md" 
            required
          >
            <option value="">Select Unit</option>
            <option value="kg">Kilogram</option>
            <option value="liter">Liter</option>
            <option value="piece">Piece</option>
            <option value="box">Box</option>
          </select>
        </div>

        {/* Stock Status */}
        <div>
          <label className="block text-sm font-medium">Stock Status</label>
          <div className="flex space-x-4 mt-1">
            <label className="flex items-center">
              <input 
                type="radio" 
                name="stockStatus" 
                value="in-stock" 
                checked={stockData.stockStatus === 'in-stock'} 
                onChange={handleChange} 
                className="mr-2" 
              />
              In Stock
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="stockStatus" 
                value="out-of-stock" 
                checked={stockData.stockStatus === 'out-of-stock'} 
                onChange={handleChange} 
                className="mr-2" 
              />
              Out of Stock
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="stockStatus" 
                value="low-stock" 
                checked={stockData.stockStatus === 'low-stock'} 
                onChange={handleChange} 
                className="mr-2" 
              />
              Low Stock
            </label>
          </div>
        </div>

        {/* Supplier */}
        <div>
          <label className="block text-sm font-medium">Supplier</label>
          <input 
            type="text" 
            name="supplier" 
            value={stockData.supplier} 
            onChange={handleChange} 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md" 
            placeholder="Enter supplier information" 
            required 
          />
        </div>

        {/* Remarks */}
        <div>
          <label className="block text-sm font-medium">Remarks</label>
          <textarea 
            name="remarks" 
            value={stockData.remarks} 
            onChange={handleChange} 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md" 
            placeholder="Enter any remarks" 
            rows="3"
          />
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="mt-4 w-full bg-[#665429] text-white py-2 rounded-md hover:bg-[#7a6b3d]"
        >
          Add Stock Status
        </button>
      </form>
    </div>
  );
};

export default StockStatusesForm;
