import React from 'react'
import ProductList from './ProductList'
import AddProduct from './AddProduct'
import EditProduct from './EditProduct'
import Navbar from './Navbar'

function Index() {
  return (
    <div className='App p-4'>
        <Navbar />
        <ProductList />
        <AddProduct />
        <EditProduct />
    </div>
  )
}

export default Index