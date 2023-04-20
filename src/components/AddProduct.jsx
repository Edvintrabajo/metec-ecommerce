import React from 'react'
import { useContext } from 'react'
import { Context } from '../context/Context'
import { displayForm, addProduct, addData, resetForm } from '../controllers/products/products.functions'

function AddProduct() {

    const { setProducts, data, setData } = useContext(Context)

    return (
        <div 
            id='create-product-form' 
            className='absolute w-full h-full top-0 left-0 hidden justify-center items-center z-10'>
            
            <form 
                id='create-product-container' 
                className='w-2/4  z-20'
                onSubmit={(e) => {
                    e.preventDefault()
                    addData(data, setData)
                    addProduct(data, setData, setProducts)
                    displayForm('create-product-form')
                    resetForm('create-product-container')
                }}
                >
                <h3 style={{width: "100%", fontSize: "2em"}}>Add Product</h3>
                <div className='form-group'>
                    <input
                        id='name'
                        placeholder='Name' 
                        type="text"
                        required 
                        />
                    <input
                        id='brand'
                        placeholder='Brand' 
                        type="text"
                        required 
                        />
                    <input
                        id='price'
                        placeholder='Price' 
                        type="number"
                        required 
                        min={0} max={10000}
                        />
                    <input
                        id='stock'
                        placeholder='Stock' 
                        type="number"
                        required
                        min={0} max={10000}
                        />
                </div>
                <div className='form-group'>
                    <input
                        id='description'
                        placeholder='Description' 
                        type="text"
                        required 
                        />
                    <input
                        id='ratings'
                        placeholder='Ratings'
                        type="number"
                        required
                        min={0} max={10}
                        />
                    <input
                        id='category'
                        placeholder='Category' 
                        type="text"
                        required 
                        />
                    <input
                        id='type'
                        placeholder='Type' 
                        type="text"
                        required 
                        />
                </div>

                <div className='form-group w-full'>
                    <input
                        id='image'
                        type="file"
                        required
                        accept="image/png, image/jpeg, image/jpg"
                        />
                </div>

                <button 
                    className='bg-info'
                    type='submit'>
                    Add
                </button>

                <button
                    className='bg-cancel'
                    type='button'
                    onClick={() => {
                        displayForm('create-product-form')
                        resetForm('create-product-container')
                        }}>
                    Cancel
                </button>

            </form>

        </div>
    )
}

export default AddProduct