import React from 'react'
import { useContext } from 'react'
import { Context } from '../context/Context'
import { displayForm, addProduct, addData, resetForm } from '../controllers/products/products.functions'
import { Card, Typography, Input } from "@material-tailwind/react";

function AddProduct() {

    const { setProducts, data, setData } = useContext(Context)

    return (
        <div 
            id='create-product-form' 
            className='absolute w-full h-full top-0 left-0 hidden justify-center items-center z-10'>
            <Card
                className='w-2/3'>

                <form 
                    id='create-product-container'
                    className='w-full p-4 z-20 flex flex-wrap justify-evenly items-center'
                    onSubmit={(e) => {
                        e.preventDefault()
                        addData(data, setData)
                        addProduct(data, setData, setProducts)
                        displayForm('create-product-form')
                        resetForm('create-product-container')
                    }}
                    >
                    <Typography className=' w-full p-4 text-info' variant="h4" color="blue-gray">
                        Add Product
                    </Typography>
                    <div className='w-2/5 mb-4 h-52 flex flex-wrap justify-center items-center'>
                        <Input
                            id='name'
                            label="Name"
                            type="text"
                            required
                            />
                        <Input
                            id='brand'
                            label='Brand' 
                            type="text"
                            required 
                            />
                        <Input
                            id='price'
                            label='Price'
                            type="number"
                            required 
                            min={0} max={10000}
                            />
                        <Input
                            id='stock'
                            label='Stock'
                            type="number"
                            required
                            min={0} max={10000}
                            />
                    </div>
                    <div className='w-2/5 mb-4 h-52 flex flex-wrap justify-center items-center'>
                        <Input
                            id='description'
                            label='Description'
                            type="text"
                            required 
                            />
                        <Input
                            id='ratings'
                            label='Ratings'
                            type="number"
                            required
                            min={0} max={10}
                            />
                        <Input
                            id='category'
                            label='Category'
                            type="text"
                            required 
                            />
                        <Input
                            id='type'
                            label='Type'
                            type="text"
                            required 
                            />
                    </div>

                    <div className=' w-4/6'>
                        <input
                            id='image'
                            type="file"
                            required
                            accept="image/png, image/jpeg, image/jpg"
                            />
                    </div>

                    <div className='flex justify-evenly w-1/2 mt-4'>
                        <button 
                            className='bg-info p-1 w-20 rounded-md text-white border-2 border-info hover:text-info hover:bg-white transition-all shadow-low-info hover:shadow-high-info'
                            type='submit'>
                            Add
                        </button>

                        <button
                            className='bg-cancel p-1 w-20 rounded-md text-white border-2 border-cancel hover:text-cancel hover:bg-white transition-all shadow-low-cancel hover:shadow-high-cancel'
                            type='button'
                            onClick={() => {
                                displayForm('create-product-form')
                                resetForm('create-product-container')
                                }}>
                            Cancel
                        </button>
                    </div>

                </form>
            </Card>

        </div>
    )
}

export default AddProduct