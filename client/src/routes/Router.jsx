import {createBrowserRouter} from "react-router-dom";
import Register from '../components/Register'
import Login from '../components/Login'
import Error404 from '../components/Error404'
import Index from '../components/Index'

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
      path: "*",
      element: <Error404 />,
    },
  
]);

export default router;