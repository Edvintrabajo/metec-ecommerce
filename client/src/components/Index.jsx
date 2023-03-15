import { LoadCircle } from '../animations/animations'
import { GiHamburgerMenu } from 'react-icons/gi'
import fetchProducts from "../controllers/fetchproducts"
import { useState, useEffect } from 'react';

const Index = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
      async function getProducts() {
        const data = await fetchProducts();
        setProducts(data);
        console.log(data)
      }
      getProducts();
    }, []);        

    return (
        <>
            <LoadCircle />
            <div id='loaded-index' className='hidden w-full h-full min-h-screen	'>
                <nav className='w-full h-1/6  flex justify-between items-center text-white p-4 text-4xl'>
                    <a href="/" className='ml-4'>
                        <h1>METEC</h1>
                    </a>
                    <label htmlFor="burger" className="burger">
                        <input id="burger" type="checkbox"/>
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </nav>
                <div id="menu" className='hidden'>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/register">Register</a></li>
                    </ul>
                </div>
                <main className='w-full h-auto text-white flex justify-evenly items-center flex-wrap mt-10'>
                    <h1 className='w-full text-center text-3xl'>Productos del mes</h1>
                    {products.map(product => (
                    // Link de card https://uiverse.io/Praashoo7/black-lizard-62
                    <div key={product.id} className="bg-white text-black rounded-xl p-4 transition-shadow shadow-low-box-shadow hover:shadow-high-box-shadow m-10">
                        <h1>{product.name}</h1>
                        <p>Marca: {product.brand}</p>
                        <p>Descripcion: {product.description}</p>                      
                        <p>Precio: {product.price}</p>                      
                        <p>Stock: {product.stock}</p>                      
                    </div>
                    ))}
                </main>
            </div>
        </>
    )
}

export default Index