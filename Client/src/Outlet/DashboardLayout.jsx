import React from 'react'
import Dashboard from '../Pages/Owner/Dashboard'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import NavbarOwner from '../Components/Owner/NavbarOwner'
import Sidebar from '../Components/Owner/Sidebar'
import Footer from '../Components/Footer'

const DashboardLayout = () => {
  return (
    <>
    <NavbarOwner/>
    <div className='flex'>
    <Sidebar/>
    <Outlet/>
    </div>
    
    
    </>
  )
}

export default DashboardLayout