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
    // <div key={product.id} className='product-card flex flex-col justify-center items-center'>
    //     <h2 className='text-2xl font-bold'>
    //       {product.name}
    //     </h2>
    //     {/* <p>{product.brand}</p> */}
    //     <img src={product.url} alt={product.image} className='m-4 w-40 h-40'/>
        
    //     <div className='w-full flex justify-evenly'>
          
          
    //     </div>
    // </div>
        <div key={product.id} className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={product.url} alt={product.name} />
            <h2 className=' font-bold text-xl'>{product.name}</h2>
          </div>
          <div className="flip-card-back">
            <div className='flex flex-col justify-center h-3/4'>
              <p>Marca: {product.brand}</p>
              <p>Descripcion: {product.description}</p>
              <p>Precio: {product.price}</p>
              <p>Stock: {product.stock}</p>
            </div>
            
            <div className='flex justify-evenly items-center w-full h-1/4 border-t-2'>
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