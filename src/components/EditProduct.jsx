import React from 'react'
import { useContext } from 'react'
import { Context } from '../context/Context'
import { displayForm, updateProduct } from '../controllers/products/products.functions'

function EditProduct() {
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
            imageRefName,
            productIdEdit
        } = useContext(Context)
        
  return (
    <div id='edit-product-form' className='absolute w-full h-full top-0 left-0 hidden justify-center items-center z-10'>
        <div id='edit-product-container' className='w-2/4  z-20'>
            <h3 style={{width: "100%", fontSize: "2em"}}>Edit Product</h3>
            <div className='form-group'>
                <label htmlFor="">Name</label>
                <input 
                    placeholder='Name' 
                    type="text"
                    onChange={(e) => setName(e.target.value)} value={name} />
                <label htmlFor="">Brand</label>
                <input 
                    placeholder='Brand' 
                    type="text" 
                    onChange={(e) => setBrand(e.target.value)} value={brand}/>
                <label htmlFor="">Price</label>
                <input 
                    placeholder='Price' 
                    type="number" min={0} max={10000}
                    onChange={(e) => setPrice(e.target.value)} value={price}/>
                <label htmlFor="">Price</label>
                <input 
                    placeholder='Stock' 
                    type="number" min={0} max={10000}
                    onChange={(e) => setStock(e.target.value)} value={stock}/>
            </div>
            <div className='form-group'>
                <label htmlFor="">Description</label>
                <input 
                    placeholder='Description' 
                    type="text" 
                    onChange={(e) => setDescription(e.target.value)} value={description}/>
                <label htmlFor="">Ratings</label>
                <input 
                    placeholder='Ratings'
                    type="number" min={0} max={10}
                    onChange={(e) => setRatings(e.target.value)} value={ratings}/>
                <label htmlFor="">Category</label>
                <input 
                    placeholder='Category' 
                    type="text" 
                    onChange={(e) => setCategory(e.target.value)} value={category}/>
                <label htmlFor="">Type</label>
                <input 
                    placeholder='Type' 
                    type="text" 
                    onChange={(e) => setType(e.target.value)} value={type}/>
            </div>
            <div className='form-group w-full'>
                <input 
                    type="file"
                    required
                    accept="image/png, image/jpeg, image/jpg"
                    onChange={(e) => setImageUpload(e.target.files[0])} />
            </div>

            <button
                className='bg-info'
                onClick={() => {
                    updateProduct(productIdEdit, name, brand, price, stock, description, ratings, category, type, imageUpload, imageRefName)
                    displayForm('edit-product-form')}}>
                Edit
            </button>

            <button
                className='bg-cancel'
                onClick={() => {
                displayForm('edit-product-form')
                }}>
                Cancel
            </button>

        </div>

    </div>
  )
}

export default EditProduct