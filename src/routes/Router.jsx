import React from "react";
import {createBrowserRouter} from "react-router-dom"
import Register from '../components/Register'
import Login from '../components/Login'
import Index from "../components/Index"
import Error404Page from "../components/Error404Page"
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/about",
      element: <AboutUs />,
    },
    {
      path: "/contact",
      element: <ContactUs />,
    },
    {
      path: "*",
      element: <Error404Page />,
    },
  
]);

export default router;