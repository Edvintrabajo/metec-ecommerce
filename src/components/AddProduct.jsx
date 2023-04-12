import React from 'react'
import { useContext } from 'react'
import { Context } from '../context/Context'
import { addProduct } from '../controllers/products/products.functions'

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
        image, setImage,
        url, setUrl
    } = useContext(Context)

  return (
    <div>
        <div id='create-product-container'>
            <h3 style={{width: "100%"}}>Add Product</h3>
            <div className='form-group'>
                <input 
                    placeholder='Name' 
                    type="text" 
                    onChange={(e) => setName(e.target.value)} />
                <input 
                    placeholder='Brand' 
                    type="text" 
                    onChange={(e) => setBrand(e.target.value)} />
                <input 
                    placeholder='Price' 
                    type="number" min={0} max={10000}
                    onChange={(e) => setPrice(e.target.value)} />
                <input 
                    placeholder='Stock' 
                    type="number" min={0} max={10000}
                    onChange={(e) => setStock(e.target.value)} />
                <input 
                    placeholder='Description' 
                    type="text" 
                    onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className='form-group'>
                <input 
                    placeholder='Ratings'
                    type="number" min={0} max={10}
                    onChange={(e) => setRatings(e.target.value)} />
                <input 
                    placeholder='Category' 
                    type="text" 
                    onChange={(e) => setCategory(e.target.value)} />
                <input 
                    placeholder='Type' 
                    type="text" 
                    onChange={(e) => setType(e.target.value)} />
                <input 
                    placeholder='Image' 
                    type="text" 
                    onChange={(e) => setImage(e.target.value)} />
                <input 
                    placeholder='Url' 
                    type="text" 
                    onChange={(e) => setUrl(e.target.value)} />
            </div>

            <button
                onClick={() => addProduct(name, brand, price, stock, description, ratings, category, type, image, url)}>
                Add
            </button>
        </div>
    </div>
  )
}

export default AddProduct