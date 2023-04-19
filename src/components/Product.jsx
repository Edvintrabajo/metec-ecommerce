import React from 'react'
import { useContext } from "react";
import { Context } from "../context/Context";
import { BsFillTrashFill } from 'react-icons/bs';
import { MdModeEdit } from 'react-icons/md';
import '../Cards.css';

function Product({product, displayForm, updateStates}) {
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
    setProductIdEdit,
    setImageUpload,
   } = useContext(Context);
  
  return (
        // ADMIN CARD
        <div key={product.id} className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className='h-4/5 flex justify-center items-center'>
              <img src={product.url} alt={product.name} />
            </div>
            <div className='bg-blue-gray-50 rounded-b-xl w-full h-1/5 flex flex-col justify-center'>
              <h2 className=' font-bold text-xl'>{product.name}</h2>
              <p>{product.description}</p>
            </div>
          </div>
          <div className="flip-card-back">
            <div className='h-3/4'>
              
              <div className='h-1/4 flex justify-center items-center border-b-2 bg-blue-gray-50 rounded-t-xl'>
                <h3 className='font-bold text-xl'>{product.brand}</h3>
              </div>
              
              <div className='h-3/4 flex justify-center'>
                <div className='overflow-y-auto p-4'>
                  <h4 className='font-bold text-lg m-4'
                  >Details</h4>
                  <p>Price: {product.price},00 €</p>
                  <p>Stock: {product.stock}</p>
                  <p>Ratings: {product.ratings}/10</p>
                </div>

              </div> 
              
            </div>
            
            <div className='flex justify-evenly items-center w-full h-1/4 border-t-2 bg-blue-gray-50 rounded-b-xl'>
              <button 
                className='bg-danger text-white p-2 w-1/3 flex justify-between items-center hover:border-danger hover:bg-white hover:text-danger transition-all duration-300 ease-in-out'
                onClick={() => {
                  displayForm('delete-product-form')
                  setProductIdEdit(product.id)
                  updateStates(product.id, setName, setBrand, setPrice, setStock, setDescription, setRatings, setCategory, setType, setImageRefName, setUrl)
                }}>
                Delete
                <BsFillTrashFill />      
              </button>
              
              <button 
                className='bg-edit text-white p-2 w-1/3 flex justify-between items-center hover:border-edit hover:bg-white hover:text-edit transition-all duration-300 ease-in-out'
                onClick={() => {
                  displayForm('edit-product-form')
                  setProductIdEdit(product.id)
                  setImageUpload(null)
                  updateStates(product.id, setName, setBrand, setPrice, setStock, setDescription, setRatings, setCategory, setType, setImageRefName, setUrl)
                }}>
                Edit
                <MdModeEdit />
              </button>
            </div>
          
          </div>
        </div>
      </div>



         
  )
}

export default Product