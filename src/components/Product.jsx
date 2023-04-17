import React from 'react'
import { useContext } from "react";
import { Context } from "../context/Context";
import { BsFillTrashFill } from 'react-icons/bs';
import { MdModeEdit } from 'react-icons/md';


function Product({product, deleteProduct, displayForm, updateStates}) {
  const { 
    setName,
    setBrand,
    setPrice,
    setStock,
    setCategory,
    setDescription,
    setRatings,
    setType,
    setUrl,
    setImageRefName,
    setProductIdEdit
   } = useContext(Context);
  
  return (
    <div key={product.id} className='product-card flex flex-col justify-center items-center'>
        <h2 className='text-2xl font-bold'>
          {product.name}
        </h2>
        {/* <p>{product.brand}</p> */}
        <img src={product.url} alt={product.image} />
        
        <div className='w-full flex justify-evenly'>
          <button 
            className='bg-red-500 text-white p-2 w-1/3 flex justify-between items-center hover:border-red-500 hover:bg-white hover:text-red-500 transition-all duration-300 ease-in-out'
            onClick={() => deleteProduct(product.id)}>
            Delete
            <BsFillTrashFill />
              
          </button>
          <button 
            className='bg-blue-500 text-white p-2 w-1/3 flex justify-between items-center hover:border-blue-500 hover:bg-white hover:text-blue-500 transition-all duration-300 ease-in-out'
            onClick={() => {
                    displayForm()
                    setProductIdEdit(product.id)
                    updateStates(product.id, setName, setBrand, setPrice, setStock, setDescription, setRatings, setCategory, setType, setImageRefName, setUrl)
                    }}>
                Edit
                <MdModeEdit />
            </button>
        </div>
    </div>
  )
}

export default Product