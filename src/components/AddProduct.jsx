import React from 'react'
import { useContext } from 'react'
import { Context } from '../context/Context'
import { addProduct } from '../controllers/products/products.functions'
import { displayForm } from '../controllers/products/products.functions'

function AddProduct() {
    const {  
        name, setName,
        brand, setBrand,
        price, setPrice,
        stock, setStock,
        description, setDescription,
        ratings, setRatings,
        category, setCategory,
        type, setType,
        imageUpload, setImageUpload,
        setProducts
    } = useContext(Context)

  return (
    <div id='create-product-form' 
        className='absolute w-full h-full top-0 left-0 hidden justify-center items-center z-10'>
        
        <div id='create-product-container' className='w-2/4  z-20'>
            <h3 style={{width: "100%", fontSize: "2em"}}>Add Product</h3>
            <div className='form-group'>
                <input 
                    placeholder='Name' 
                    type="text"
                    required 
                    onChange={(e) => setName(e.target.value)} />
                <input 
                    placeholder='Brand' 
                    type="text"
                    required 
                    onChange={(e) => setBrand(e.target.value)} />
                <input 
                    placeholder='Price' 
                    type="number"
                    required 
                    min={0} max={10000}
                    onChange={(e) => setPrice(e.target.value)} />
                <input 
                    placeholder='Stock' 
                    type="number"
                    required
                    min={0} max={10000}
                    onChange={(e) => setStock(e.target.value)} />
            </div>
            <div className='form-group'>
                <input 
                    placeholder='Description' 
                    type="text"
                    required 
                    onChange={(e) => setDescription(e.target.value)} />
                <input 
                    placeholder='Ratings'
                    type="number"
                    required
                    min={0} max={10}
                    onChange={(e) => setRatings(e.target.value)} />
                <input 
                    placeholder='Category' 
                    type="text"
                    required 
                    onChange={(e) => setCategory(e.target.value)} />
                <input 
                    placeholder='Type' 
                    type="text"
                    required 
                    onChange={(e) => setType(e.target.value)} />
            </div>

            <div className='form-group w-full'>
                <input 
                    type="file"
                    required
                    accept="image/png, image/jpeg, image/jpg"
                    onChange={(e) => setImageUpload(e.target.files[0])} />
            </div>

            <button
                onClick={() => {
                    addProduct(name, brand, price, stock, description, ratings, category, type, imageUpload, setProducts)
                    displayForm('create-product-form')}}>
                Add
            </button>

            <button
                className='bg-cancel'
                onClick={() => {
                displayForm('create-product-form')
                }}>
                Cancel
            </button>

        </div>

    </div>
  )
}

export default AddProduct