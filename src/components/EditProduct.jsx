import React from 'react'
import { useContext } from 'react'
import { Context } from '../context/Context'
import { displayForm, updateProduct, addDataEdit, resetForm } from '../controllers/products/products.functions'
import { Card, Typography, Input } from "@material-tailwind/react";

function EditProduct() {
    const { productIdEdit, setProducts, data, setData, imageRefName } = useContext(Context)

  return (
    <div 
        id='edit-product-form' 
        className='absolute w-full h-full top-0 left-0 hidden justify-center items-center z-10'>
        
        <Card
            className='w-2/3'>

            <form 
                id='edit-product-container' 
                className='w-full p-4 z-20 flex flex-wrap justify-evenly items-center'
                onSubmit={(e) => {
                    e.preventDefault()
                    addDataEdit(data, setData)
                    updateProduct(productIdEdit, setProducts, data, setData, imageRefName)
                    displayForm('edit-product-form')
                    resetForm('edit-product-container')
                }}
                >
                <Typography className=' w-full p-4 text-edit' variant="h4" color="blue-gray">
                    Edit Product
                </Typography>                
                <div className='w-2/5 mb-4 h-72 flex flex-wrap justify-center items-center'>
                    <label htmlFor="">Name</label>
                    <Input 
                        id='editName'
                        name='editName'
                        type="text"
                        required/>
                    <label htmlFor="">Brand</label>
                    <Input 
                        id='editBrand'
                        name='editBrand' 
                        type="text"
                        required />
                    <label htmlFor="">Price</label>
                    <Input 
                        id='editPrice'
                        name='editPrice' 
                        type="number"
                        required 
                        min={0} max={10000} />
                    <label htmlFor="">Stock</label>
                    <Input 
                        id='editStock'
                        name='editStock' 
                        type="number"
                        required 
                        min={0} max={10000} />
                </div>
                <div className='w-2/5 mb-4 h-72 flex flex-wrap justify-center items-center'>
                    <label htmlFor="">Description</label>
                    <Input 
                        id='editDescription'
                        name='editDescription' 
                        type="text"
                        required />
                    <label htmlFor="">Ratings</label>
                    <Input 
                        id='editRatings'
                        name='editRatings'
                        type="number"
                        required 
                        min={0} max={10} />
                    <label htmlFor="">Category</label>
                    <Input 
                        id='editCategory'
                        name='editCategory' 
                        type="text"
                        required />
                    <label htmlFor="">Type</label>
                    <Input 
                        id='editType'
                        name='editType' 
                        type="text"
                        required />
                </div>
                <div className=' w-4/6'>
                    <input
                        id='editImage'
                        name='editImage'
                        type="file"
                        accept="image/png, image/jpeg, image/jpg" />
                </div>

                <div className='flex justify-evenly w-1/2 mt-4'>
                    <button
                        className='bg-edit p-1 w-20 rounded-md text-white border-2 border-edit hover:text-edit hover:bg-white transition-all shadow-low-edit hover:shadow-high-edit'
                        type='submit'>
                        Edit
                    </button>

                    <button
                        className='bg-cancel p-1 w-20 rounded-md text-white border-2 border-cancel hover:text-cancel hover:bg-white transition-all shadow-low-cancel hover:shadow-high-cancel'
                        type='button'
                        onClick={() => {
                            displayForm('edit-product-form');
                            resetForm('edit-product-container');
                            }}>
                        Cancel
                    </button>
                </div>

            </form>
        </Card>
        

    </div>
  )
}

export default EditProduct