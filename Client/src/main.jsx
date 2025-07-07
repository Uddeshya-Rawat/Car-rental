import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Cardetails from './Pages/Cardetails.jsx'
import Cars from './Pages/Cars.jsx'
import MyBookings from './Pages/MyBookings.jsx'



const routes=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/carDetails/:id',
    element:<Cardetails/>
  },
  {
    path:'/cars',
    element:<Cars/>
  },
  {
    path:'/myBookings',
    element:<MyBookings/>
  }
  
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}>
    </RouterProvider>
    
  </StrictMode>,
)
