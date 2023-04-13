import {createBrowserRouter} from "react-router-dom"
import Register from '../components/Register'
import Index from "../components/Index"
import Navbar from "../components/Navbar"

const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/navbar",
      element: <Navbar />,
    },
    // {
    //   path: "/admin",
    //   element: <IndexAdmin />,
    // },
    // {
    //   path: "/login",
    //   element: <Login />,
    // },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "*",
      element: <p>ERROR 404</p>,
    },
  
]);

export default router;