import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../Pages/Home/Home";
// import Home from "../Pages/Home";

  
const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      children:[
        {
            path:'/',
            element:<Home/>
        }
      ]
    },
  ]);
  export default router