import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Cart from "../Pages/Cart/Cart";
import DashBoard from "../layouts/DashBoard";
// import Home from "../Pages/Home";

  
const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/menu',
            element:<Menu/>
        },
        {
            path:'/order',
            element:<PrivateRoute><Order/></PrivateRoute>
        },
        {
            path:'/order/:category',
            element:<Order/>
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/register',
            element:<Register/>
        },
        {
            path:'/cart',
            element:<Cart/>
        },
      ],
    },
    {
      path:'/dashboard',
      element:<DashBoard/>,
      children:[
        {
          path:'/dashboard/manageBookings',
          element:<Cart></Cart>
        }
      ]
  }
  ]);
  export default router