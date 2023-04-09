import {createBrowserRouter} from "react-router-dom";
import Register from '../components/Register'
import Login from '../components/Login'
import Error404 from '../components/Error404'
import Index from '../components/Index'
import FiltredProducts from '../components/FiltredProducts'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/products-filtred",
      element: <FiltredProducts />,
    },
    {
      path: "*",
      element: <Error404 />,
    },
  
]);

export default router;