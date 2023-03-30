import { LoadCircle } from '../animations/animations'
import fetchProducts from "../controllers/fetchproducts"
import fetchAddProduct from "../controllers/products/fetch.add.products"
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import AddProduct from "./admin/AddProduct"

const Index = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
      async function getProducts() {
        try{
            const data = await fetchProducts();
            setProducts(data);
            // console.log(data);
        }catch(err){
            console.log(`Ha ocurrido un error: ${err}`)
        }
      }

      async function addProduct() {
        try{
            const data = await fetchAddProduct();
        }catch(err){
            console.log(`Ha ocurrido un error: ${err}`)
        }
      }

      getProducts();
      addProduct();
    }, []);        

    return (
        <>
            <LoadCircle />
            <div id='loaded-index' className='hidden w-full h-full min-h-screen	'>
                <Navbar />
                <AddProduct/>
                <main className='w-full h-auto p-4 min-w-20 text-white flex justify-evenly items-center flex-wrap mt-10'>
                    <h1 className='w-full text-center text-3xl'>Productos del mes</h1>
                    {products.map(product => (
                    // Link de card https://uiverse.io/Praashoo7/black-lizard-62
                        <div key={product.id} className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={product.url} alt={product.name}/>
                                    <h1>{product.name}</h1>
                                </div>
                                <div className="flip-card-back">
                                    <p>Marca: {product.brand}</p>
                                    <p>Descripcion: {product.description}</p>                      
                                    <p>Precio: {product.price}</p>                      
                                    <p>Stock: {product.stock}</p>
                                </div>
                            </div>
                        </div>                      
                    ))}
                </main>
            </div>
        </>
    )
}

export default Index