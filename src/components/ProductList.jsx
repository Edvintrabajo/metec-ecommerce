import React, { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../context/Context";
import {
  getProducts,
  getTenProducts,
  deleteProduct,
  displayForm,
  getStates,
} from "../controllers/products/products.functions";
import Product from "./Product";
import MainpageTitle from "./MainPageTitle";
import Filters from "./Filters";
import AddButton from "./AddButton";

function ProductList() {
  const { products, setProducts, setCurrentCategory, isAuthtorized } = useContext(Context);

  // IMPORTANTE:
  // Se debe dejar el get products en el useEffect para que
  // no consuma de forma excesiva la API de firebase y provoque
  // el cierre de esta por exceso de peticiones.
  // Por tanto despues de añadir algun producto, se debe recargar la pagina para verlo

  useEffect(() => {
    getTenProducts(setProducts);
    setCurrentCategory("Trending Top");
  }, []);

  return (
    <div className="w-full">
      
      <Filters />
      <MainpageTitle />
      {isAuthtorized ? <AddButton /> : <></>}
      
      <div
        id="products-cards-container"
        className="flex w-full flex-wrap items-center justify-evenly pt-2"
      >
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            displayForm={displayForm}
            getStates={getStates}
          />
        ))}

        <div id="showAllProducts" className="w-full justify-center hidden">
          <button
            className="w-20 rounded-md border-2 border-cancel bg-cancel p-1 text-white shadow-low-cancel transition-all hover:bg-white hover:text-cancel hover:shadow-high-cancel"
            type="button"
            onClick={() => {
              getProducts(setProducts);
            }}
          >
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
