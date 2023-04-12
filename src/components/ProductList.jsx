import React, { useEffect } from 'react'
import { useContext } from 'react'
import { Context } from '../context/Context'
import { getProducts, deleteProduct, displayForm } from '../controllers/products/products.functions'
import Product from './Product'


function ProductList() {
    const { products, setProducts, setProductIdEdit } = useContext(Context)

    // IMPORTANTE: 
    // Se debe dejar el get products en el useEffect para que 
    // no consuma de forma excesiva la API de firebase y provoque
    // el cierre de esta por exceso de peticiones.
    // Por tanto despues de añadir algun producto, se debe recargar la pagina para verlo

    useEffect(() => {
        getProducts(setProducts)
    }, [])

    return (
    <div>        
        <h1>Product List</h1>

        <div id='products-cards-container'>
            {products.map(product => (
        
                <Product key={product.id} product={product} deleteProduct={deleteProduct} displayForm={displayForm} setProductIdEdit={setProductIdEdit} />
            ))}
        </div>
        
        
    </div>
  )
}

export default ProductList