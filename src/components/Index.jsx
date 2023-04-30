import React from "react";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import Navbar from "./Navbar";
import DeleteProduct from "./DeleteProduct";

function Index() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-start p-4">
      <Navbar />
      <ProductList />
      <AddProduct />
      <EditProduct />
      <DeleteProduct />
    </div>
  );
}

export default Index;
