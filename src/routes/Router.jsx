import {createBrowserRouter} from "react-router-dom"
import Register from '../components/Register'
import Login from '../components/Login'
import Index from "../components/Index"

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
      element: <p>ERROR 404</p>,
    },
  
]);

export default router;