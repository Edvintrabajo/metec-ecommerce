import { createContext, useState, useEffect } from 'react'
import displayMenu from "../controllers/filters/filter.display";
import fetchProducts from "../controllers/fetchproducts";
import fetchAddProduct from "../controllers/products/fetch.add.products";

export const Context = createContext()

export function ContextProvider(props) {
    const [products, setProducts] = useState([]);
    
    const indexStates = () => {
      useEffect(() => {
        async function getProducts() {
          try {
            const data = await fetchProducts();
            setProducts(data);
            // console.log(data);
          } catch (err) {
            console.log(`Ha ocurrido un error: ${err}`);
          }
        }
    
        async function addProduct() {
          try {
            const data = await fetchAddProduct();
          } catch (err) {
            console.log(`Ha ocurrido un error: ${err}`);
          }
        }
    
        displayMenu(); // Funcion para mostrar el menu de filtros
        getProducts();
      }, []);
    }

    return (
        <Context.Provider value={{
            products, 
            setProducts,
            indexStates
        }}>{props.children} 
        </Context.Provider>
    )
}