import React, { useEffect, useContext, useState } from "react";
import { Context } from "../context/Context";
import ProductList from "./ProductList";
import MainNavbar from "./MainNavbar";
import { auth } from "../config/firebase";
import { verifyUserStatus } from "../controllers/admins/admins.functions";
import Footer from "./Footer";
import FilterBg from "./FilterBg";
import MessageAlert from "./MessageAlert"

function Index() {
  const { setIsAuthtorized, setLogged } = useContext(Context);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        user.reload().then(() => {
          verifyUserStatus(setIsAuthtorized, setLogged);
        });
      } else {
        setIsAuthtorized(false);
      }
    });
  }, []);

  return (
    <div className="relative flex min-h-screen animate-slow-opacity-on flex-col items-center justify-start p-4">
      <MainNavbar />
      <MessageAlert />
      <ProductList />
      <Footer />
      <FilterBg />
    </div>
  );
}

export default Index;
