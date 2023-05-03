import React, { useEffect, useContext } from "react";
import { Context } from "../context/Context";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import Navbar from "./Navbar";
import DeleteProduct from "./DeleteProduct";
import { auth } from "../config/firebase";
import { isAdmin } from "../controllers/admins/admins.functions";

function Index() {
  const { setIsAuthtorized } = useContext(Context);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthtorized(isAdmin(user.email));
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
    </div>
  );
}

export default Index;
