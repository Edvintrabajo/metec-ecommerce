import React, { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../context/Context";
import {
  getProducts,
  deleteProduct,
  displayForm,
  getStates,
} from "../controllers/products/products.functions";
import Product from "./Product";
import AddButton from "./AddButton";
import MainpageTitle from "./MainPageTitle";
import Filters from "./Filters";

function ProductList() {
  const { products, setProducts, isAuthtorized } = useContext(Context);

  // IMPORTANTE:
  // Se debe dejar el get products en el useEffect para que
  // no consuma de forma excesiva la API de firebase y provoque
  // el cierre de esta por exceso de peticiones.
  // Por tanto despues de añadir algun producto, se debe recargar la pagina para verlo

  useEffect(() => {
    getProducts(setProducts);
  }, []);

  return (
    <div className="w-full">
      {isAuthtorized ? <AddButton /> : <></>}
      <div className="mr-5">
          <Filters />
      </div>
      <MainpageTitle title="Trending Top"/>
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
      </div>
    </div>
  );
}

export default ProductList;
