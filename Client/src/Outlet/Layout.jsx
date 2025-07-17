import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'

const Layout = ({setShowLogin}) => {
  return (
    <>
    <Navbar setShowLogin={setShowLogin}/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}

export default Layout