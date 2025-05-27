import React from "react";
import Header from "./comman/Header";
import Footer from "./comman/Footer";
import Layout from "./Layout";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Shop from "./Pages/Shop";
import ProductDetail from "./Pages/ProductDetail"; 
import MainContext from "./MainContext";
import CartPage from "./Componets/CartPage";
import Contact from "./Pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path :"/" , 
        element: <Home/>  
      },
      {
        path: "/abouts", 
        element: <About/>  
      }, 
      { 
        path: "/Shop/:slug?", 
        element: <Shop/>  
      },
      { 
        path: "/productdetail/:productId?", 
        element: <ProductDetail/> 
      },
      { 
        path: "/shop/carts", 
        element: <CartPage/>
      },
      { 
        path: "/contacts", 
        element: <Contact/> 
      },
    ] 
  },
]);

function App() { 
  return ( 
    <>  
    <MainContext>  
       <RouterProvider router={router} /> 
    </MainContext> 
    </>  
  );  
}  


export default App;
