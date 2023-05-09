import React from "react";
import {createBrowserRouter} from "react-router-dom"
import Register from '../components/Register'
import Login from '../components/Login'
import Index from "../components/Index"
import Error404Page from "../components/Error404Page"

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
      path: "*",
      element: <Error404Page />,
    },
  
]);

export default router;