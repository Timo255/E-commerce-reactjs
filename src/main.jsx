import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./home/home.jsx";
import Shop from './shop/Shop.jsx'
import ProductCard from './shop/ProductCard.jsx'
import CartPage from './shop/CartPage.jsx'
import Login from './components/Login.jsx'
import SignUp from './components/SignUp.jsx'
import OveralProvider from './Context/OveralProvider.jsx'
import Authentication from './Context/Authentication.jsx'
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "/", element: <Home />},
      {path: "/shop", element: <Shop/>},
      {path: "shop/:id", element: <ProductCard/>},
      {path: "/cart", element: <PrivateRoute><CartPage/></PrivateRoute>},
    ]
  },
  {
   path: "/login",
   element: <Login /> 
  },
  {
    path: "/sign-up",
    element: <SignUp />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
   <Authentication>
     <OveralProvider>
       <RouterProvider router={router} />
     </OveralProvider>
   </Authentication>  
)
