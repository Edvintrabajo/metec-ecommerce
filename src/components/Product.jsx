import React from 'react'
import { useContext } from "react";
import { Context } from "../context/Context";

function Product({product, deleteProduct, displayForm, setProductIdEdit, updateStates}) {
  const { 
    name, setName,
    brand, setBrand,
    price, setPrice,
    stock, setStock,
    category, setCategory,
    description, setDescription,
    ratings, setRatings,
    type, setType,
    image, setImage,
    url, setUrl
   } = useContext(Context);
  
  return (
    <div key={product.id} className='product-card'>
        <h2>{product.name}</h2>
        <p>{product.brand}</p>
        <img src={product.url} alt={product.image} />
        
        <button 
            onClick={() => deleteProduct(product.id)}>
            Delete
        </button>
        
        <button 
            onClick={() => {
                displayForm()
                setProductIdEdit(product.id)
                updateStates(product.id, setName, setBrand, setPrice, setStock, setDescription, setRatings, setCategory,  setType, setImage, setUrl)
                }}>
            Edit
        </button>
    </div>
  )
}

export default Product