import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from './routes/Home.jsx'
import Buy from './routes/Buy.jsx'
import { ProductProvider } from './Context/ProductsContext.jsx'
import { InfoProvider } from './Context/liveProductContext.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children:[
      {
        path:"/",
        element: <Home />,
      },
      {
        path:"buy",
        element: <Buy />,
      },
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
  <ProductProvider>
  <InfoProvider> 
    <RouterProvider router={router} />
  </InfoProvider> 
  </ProductProvider>  
  </React.StrictMode>,
)
