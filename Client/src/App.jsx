import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { BrowserRouter, createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Cardetails from './Pages/Cardetails.jsx'
import Cars from './Pages/Cars.jsx'
import MyBookings from './Pages/MyBookings.jsx'
import Layout from './Outlet/Layout.jsx'
import Dashboard from './Pages/Owner/Dashboard.jsx'
import Managebooking from './Pages/Owner/Managebooking.jsx'
import ManageCars from './Pages/Owner/ManageCars.jsx'
import AddCar from './Pages/Owner/AddCar.jsx'
import DashboardLayout from './Outlet/DashboardLayout.jsx'
import Login from './Pages/Login.jsx'





function App() {
 const [showLogin,setShowLogin]=useState(false)

const routes = createBrowserRouter([

  {
    path: "/",
    element: <Layout showLogin={showLogin} setShowLogin={setShowLogin} />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/car-details/:id',
        element: <Cardetails />
      },
      {
        path: '/cars',
        element: <Cars />
      },
      {
        path: '/myBookings',
        element: <MyBookings />
      }

    ]
  }
  ,
   {
    path: '/owner',
    element: <DashboardLayout/>,
    children: [
        {
        path: "dashboard",
        element:<Dashboard/>

    },
      {
        path: "addCar",
        element:<AddCar/>

    }
    ,
    {
      path:'managebookings',
      element:<Managebooking/>
    }
    ,
    {
      path:'managecars',
      element:<ManageCars/>
    }
    ]
  }
])




  return (
    <>
    {showLogin && <Login setShowLogin={setShowLogin} showLogin={showLogin}/>}
    <RouterProvider router={routes}>
    </RouterProvider>
    </>
  )
}

export default App
