import React from 'react'
import { useContext } from "react";
import { Context } from "../context/Context";
import { BsFillTrashFill } from 'react-icons/bs';
import { MdModeEdit } from 'react-icons/md';
import { MdOutlineShoppingCart } from 'react-icons/md';
import '../Cards.css';

function Product({product, displayForm, getStates}) {
  const { setProductIdEdit, setImageRefName, data, setData } = useContext(Context)

  return (
      // NEW-CARD

      <div className="rounded-xl w-60 h-80 p-4 bg-white relative overflow-visible text-black">
        <div className="bg-white p-2 h-1/2 w-full rounded-lg transition-all shadow-low-card flex justify-center align-middle hover:shadow-high-card hover:-translate-y-(25%)">
          <img className=' rounded-2xl w-2/3' src={product.url} alt={product.name} />
        </div>
        <div className="p-2 pb-6">
          <h3 className="text-title font-black text-lg">{product.name}</h3>
          <p className="text-sm">{product.description}</p>
          <p>Ratings: {product.ratings}/10</p>
            

        </div>
        <div className="w-full flex justify-center items-center pt-3 border-t-2">
          <div className='w-1/2 text-left'>
            <span className="text-title font-black text-lg">{product.price},00 €</span>
          </div>
          
          <div className='flex justify-end  w-1/2'>
            
            {/* USER-VIEW */}
            {/* <button 
              className="border-2 border-info flex p-2 rounded-full transition-all text-info hover:text-white hover:bg-info"
              >
              <MdOutlineShoppingCart />      
            </button> */}

            {/* ADMIN-VIEW */}
            <button 
              className="border-2 border-danger mr-2 flex p-2 rounded-full transition-all text-danger hover:text-white hover:bg-danger" 
              onClick={() => {
                displayForm('delete-product-form')
                setProductIdEdit(product.id)
                getStates(product.id, data, setData)
              }}>
              <BsFillTrashFill />      
            </button>
            
            <button
              className='border-2 border-edit flex p-2 rounded-full transition-all text-edit hover:text-white hover:bg-edit' 
              onClick={() => {
                displayForm('edit-product-form')
                setProductIdEdit(product.id)
                setImageRefName(product.imageRefName)
                getStates(product.id, data, setData)
              }}>
              <MdModeEdit />
            </button>
          </div>

        </div>
      </div>
      
      //     {/* RATING */}

      //     <div className="rating">
      //       <label htmlFor="star-1">
      //         <input className='hidden' type="radio" id="star-1" name="star-radio" value="star-1"/>
      //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
      //       </label>
      //       <label htmlFor="star-2">
      //         <input className='hidden' type="radio" id="star-2" name="star-radio" value="star-1"/>
      //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
      //       </label>
      //       <label htmlFor="star-3">
      //         <input className='hidden' type="radio" id="star-3" name="star-radio" value="star-1"/>
      //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
      //       </label>
      //       <label htmlFor="star-4">
      //         <input className='hidden' type="radio" id="star-4" name="star-radio" value="star-1"/>
      //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
      //       </label>
      //       <label htmlFor="star-5">
      //         <input className='hidden' type="radio" id="star-5" name="star-radio" value="star-1"/>
      //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
      //       </label>
      //     </div>
  )
}

export default Product