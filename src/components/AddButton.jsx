import React from 'react'
import { IoAddCircleOutline } from 'react-icons/io5'
import { displayForm } from "../controllers/products/products.functions";
function AddButton() {
  return (
    <button 
      className='bg-info hover:border-info hover:bg-white hover:text-info absolute top-28 right-10 flex justify-between items-center p-2 w-24 transition-all duration-300 ease-in-out'
      onClick={() => {
        displayForm('create-product-form')
      }}
    >
        <p>Add</p>
        <IoAddCircleOutline className='text-white ' />
    </button>
  )
}

export default AddButton