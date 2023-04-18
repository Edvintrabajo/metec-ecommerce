import React from 'react'
import { useContext } from 'react'
import { Context } from '../context/Context'
import { displayForm, deleteProduct } from '../controllers/products/products.functions'

function DeleteProduct() {
    const { productIdEdit, setProducts } = useContext(Context)
        
  return (
    <div id='delete-product-form' className='absolute w-full h-full top-0 left-0 hidden justify-center items-center z-10'>
        <div id='delete-product-container' className='w-1/3  z-20 flex justify-center items-center'>
            <h2 style={{width: "100%", fontSize: "2em"}}>Delete Product</h2>
            <div className='form-group w-full block'>
                <label htmlFor="check-delete">If you delete this product, you will not be able to recover it. Are you sure you want to delete this product?</label>
            </div>

            <button
                className='bg-danger'
                onClick={() => {
                deleteProduct(productIdEdit, setProducts)
                displayForm('delete-product-form')
                }}>
                Delete
            </button>
            <button
                className='bg-cancel'
                onClick={() => {
                displayForm('delete-product-form')
                }}>
                Cancel
            </button>
        </div>

    </div>
  )
}

export default DeleteProduct