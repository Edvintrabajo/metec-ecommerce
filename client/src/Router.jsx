import {createBrowserRouter} from "react-router-dom";
import Register from './Register'
import Login from './Login'
import { LoadCircle } from './animations/animations'

const router = createBrowserRouter([
    {
      path: "/",
      element: <LoadCircle />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    }
  
]);

export default router;