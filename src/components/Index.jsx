import React from 'react'
import ProductList from './ProductList'
import AddProduct from './AddProduct'
import EditProduct from './EditProduct'
import Navbar from './Navbar'
import DeleteProduct from './DeleteProduct'

function Index() {
  return (
    <div className='App p-4 relative min-h-screen flex justify-start items-center'>
        <Navbar />
        <ProductList />
        <AddProduct />
        <EditProduct />
        <DeleteProduct />
    </div>
  )
}

export default Index