import React from 'react'
import { useContext } from 'react'
import { Context } from '../context/Context'
import { displayForm, deleteProduct } from '../controllers/products/products.functions'
import { Card, Typography } from "@material-tailwind/react";

function DeleteProduct() {
    const { productIdEdit, setProducts } = useContext(Context)
        
  return (
    <div id='delete-product-form' className='absolute w-full h-full top-0 left-0 hidden justify-center items-center z-10'>
        <Card id='delete-product-container' className=' w-96 z-20 flex justify-center items-center text-center border-2 p-4 bg-white shadow-high-danger' color="transparent" shadow={false}>
            <Typography className='text-danger' variant="h4" color="blue-gray">
                Delete Product
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                If you delete this product, you will not be able to recover it. Are you sure you want to delete this product?
            </Typography>
            <div className='flex justify-between mt-4 w-1/2'>
                <button
                    className='bg-danger p-1 w-20 rounded-md text-white border-2 border-danger hover:text-danger hover:bg-white transition-all shadow-low-danger hover:shadow-high-danger'
                    onClick={() => {
                    deleteProduct(productIdEdit, setProducts)
                    displayForm('delete-product-form')
                    }}>
                    Delete
                </button>
                <button
                    className='bg-cancel p-1 w-20 rounded-md text-white border-2 border-cancel hover:text-cancel hover:bg-white transition-all shadow-low-cancel hover:shadow-high-cancel'
                    type='button'
                    onClick={() => {
                    displayForm('delete-product-form')
                    }}>
                    Cancel
                </button>
            </div>
        </Card>

        {/* <div id="delete-message-container"></div> */}

    </div>
  )
}

export default DeleteProduct