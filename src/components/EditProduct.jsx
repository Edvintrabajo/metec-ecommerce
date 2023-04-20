import React from 'react'
import { useContext } from 'react'
import { Context } from '../context/Context'
import { displayForm, updateProduct, addDataEdit, resetForm } from '../controllers/products/products.functions'

function EditProduct() {
    const { productIdEdit, setProducts, data, setData, imageRefName } = useContext(Context)

  return (
    <div 
        id='edit-product-form' 
        className='absolute w-full h-full top-0 left-0 hidden justify-center items-center z-10'>
        <form 
            id='edit-product-container' 
            className='w-2/4  z-20'
            onSubmit={(e) => {
                e.preventDefault()
                addDataEdit(data, setData)
                updateProduct(productIdEdit, setProducts, data, setData, imageRefName)
                displayForm('edit-product-form')
                resetForm('edit-product-container')
            }}
            >
            <h3 style={{width: "100%", fontSize: "2em"}}>Edit Product</h3>
            <div className='form-group'>
                <label htmlFor="">Name</label>
                <input 
                    id='editName'
                    name='editName'
                    placeholder='Name'
                    type="text"/>
                <label htmlFor="">Brand</label>
                <input 
                    id='editBrand'
                    name='editBrand'
                    placeholder='Brand' 
                    type="text" />
                <label htmlFor="">Price</label>
                <input 
                    id='editPrice'
                    name='editPrice'
                    placeholder='Price' 
                    type="number" min={0} max={10000} />
                <label htmlFor="">Price</label>
                <input 
                    id='editStock'
                    name='editStock'
                    placeholder='Stock' 
                    type="number" min={0} max={10000} />
            </div>
            <div className='form-group'>
                <label htmlFor="">Description</label>
                <input 
                    id='editDescription'
                    name='editDescription'
                    placeholder='Description' 
                    type="text" />
                <label htmlFor="">Ratings</label>
                <input 
                    id='editRatings'
                    name='editRatings'
                    placeholder='Ratings'
                    type="number" min={0} max={10} />
                <label htmlFor="">Category</label>
                <input 
                    id='editCategory'
                    name='editCategory'
                    placeholder='Category' 
                    type="text" />
                <label htmlFor="">Type</label>
                <input 
                    id='editType'
                    name='editType'
                    placeholder='Type' 
                    type="text" />
            </div>
            <div className='form-group w-full'>
                <input
                    id='editImage'
                    name='editImage'
                    type="file"
                    accept="image/png, image/jpeg, image/jpg" />
            </div>

            <button
                className='bg-edit'
                type='submit'>
                Edit
            </button>

            <button
                className='bg-cancel'
                type='button'
                onClick={() => {
                    displayForm('edit-product-form');
                    resetForm('edit-product-container');
                    }}>
                Cancel
            </button>

        </form>

    </div>
  )
}

export default EditProduct