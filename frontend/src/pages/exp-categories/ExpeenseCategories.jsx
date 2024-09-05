import React from 'react'

const ExpeenseCategories = () => {
  return (
    <div>
      <h1 className='mt-10 ml-5 text-3xl text-white'>Expense Categories</h1>
      <button className='mt-5 ml-5 bg-[#665429] text-white p-3 rounded'>Add New Category</button>
      {/* table with expense categories will be fetched from backend */}
    </div>
  )
}

export default ExpeenseCategories
