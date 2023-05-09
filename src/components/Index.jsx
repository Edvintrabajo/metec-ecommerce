import React, { useEffect, useContext } from "react";
import { Context } from "../context/Context";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import Navbar from "./Navbar";
import DeleteProduct from "./DeleteProduct";
import { auth } from "../config/firebase";
import { verifyUserStatus } from "../controllers/admins/admins.functions";
import { hideFilters } from "../controllers/filters/filters.functions";
import Footer from "./Footer";

function Index() {
  const { setIsAuthtorized } = useContext(Context);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        user.reload().then(() => {
          verifyUserStatus(setIsAuthtorized);
        });
      } else {
        setIsAuthtorized(false);
      }
    });
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-start p-4">
      <Navbar />
      <ProductList />
      <AddProduct />
      <EditProduct />
      <DeleteProduct />
      <Footer />
      <div
        id="message-container"
        className="absolute top-0 left-0 hidden h-full w-full items-center justify-center bg-b-rgba-4 text-white"
      ></div>
      <div
        id="filter-container"
        onClick={() => {
          hideFilters("filter-container");
        }}
        className="absolute top-0 left-0 hidden h-full w-full items-center justify-center bg-b-rgba-4 text-white"
      ></div>
    </div>
  );
}

export default Index;
