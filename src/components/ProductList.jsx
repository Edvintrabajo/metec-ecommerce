import React, { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../context/Context";
import { getTrendingTop } from "../controllers/products/products.functions";
import Product from "./Product";
import MainpageTitle from "./MainPageTitle";
import Pagination from "./Pagination";

function ProductList() {
  const { setProducts, currentTenProducts, setCurrentTenProducts } = useContext(Context);

  // IMPORTANTE:
  // Se debe dejar el get products en el useEffect para que
  // no consuma de forma excesiva la API de firebase y provoque
  // el cierre de esta por exceso de peticiones.
  // Por tanto despues de añadir algun producto, se debe recargar la pagina para verlo

  useEffect(() => {
    getTrendingTop(setProducts, setCurrentTenProducts);
  }, []);

  return (
    <div className="w-full">
            
      <MainpageTitle />
      
      <div
        id="products-cards-container"
        className="flex w-full flex-wrap items-center justify-evenly pt-2"
      >
        {currentTenProducts.map((product) => (
          <Product
            key={product.id}
            product={product}
          />
        ))}
      </div>

      <Pagination />
    </div>
  );
}

export default ProductList;
