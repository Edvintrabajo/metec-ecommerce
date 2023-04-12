import React from 'react'

function Product({product, deleteProduct, displayForm, setProductIdEdit}) {
  return (
    <div key={product.id} className='product-card'>
        <h2>{product.name}</h2>
        <p>{product.brand}</p>
        <img src={product.url} alt={product.image} />
        
        <button 
            onClick={() => deleteProduct(product.id)}>
            Delete
        </button>
        
        <button 
            onClick={() => {
                displayForm()
                setProductIdEdit(product.id)}}>
            Edit
        </button>
    </div>
  )
}

export default Product