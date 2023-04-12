import React from 'react'
import ProductList from './ProductList'
import AddProduct from './AddProduct'
import EditProduct from './EditProduct'

function Index() {
  return (
    <div className='App'>
        <h1 className='font-bold	'>METEC</h1>
        <ProductList />
        <AddProduct />
        <EditProduct />
    </div>
  )
}

export default Index