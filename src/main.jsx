import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Component/Pages/Login'
import Register from './Component/Pages/Register'
import Produtc from './Component/Pages/Product'
import Shop from './Component/Pages/Shop'

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Hello world</h1>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/product",
    element: <Produtc />
  },
  {
    path: "/shop",
    element: <Shop />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
