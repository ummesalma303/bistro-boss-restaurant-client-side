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
// import AllUsers from "../Pages/AllUsers.jsx/AllUsers";
// import AdminHome from "../Pages/AdminHome/AdminHome";
// import AdminRoutes from "../Pages/AdminRoute/AdminRoutes";
import AddItems from "../Pages/dashboard/AddItems/AddItems";
import AllUsers from "../Pages/dashboard/AllUsers.jsx/AllUsers";
import AdminHome from "../Pages/dashboard/AdminHome/AdminHome";
import AdminRoutes from "../Pages/dashboard/AdminRoute/AdminRoutes";
import ManageItems from "../Pages/dashboard/ManageItems/ManageItems";
import UpdateItem from "../Pages/dashboard/UpdateItem/UpdateItem";
import Payment from "../Pages/dashboard/Payment/Payment";
import PaymentHistory from "../Pages/dashboard/PaymentHistory/PaymentHistory";
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
          // path:'/dashboard/manageBookings',
          index:true,
          element:<AdminHome></AdminHome>
        },
        {
          path:'/dashboard/manageBookings',
          element:<Cart></Cart>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        },
        {
          path:'paymentHistory',
          element:<PaymentHistory/>
        },
        {
          path:'addItems',
          element:<AdminRoutes><AddItems></AddItems></AdminRoutes>
        },
        {
          path:'manageItems',
          element:<AdminRoutes><ManageItems></ManageItems></AdminRoutes>
        },
        {
          path:'allUsers',
          element:<AdminRoutes><AllUsers></AllUsers></AdminRoutes>
        },
        {
          path:'updateItem/:id',
          loader: ({params}) => fetch(`http://localhost:5000/singleMenu/${params.id}`),
          element:<AdminRoutes><UpdateItem></UpdateItem></AdminRoutes>,
        }
      ]
  }
  ]);
  export default router