import React, { useState } from 'react'
import { assets } from '../assets/CarRental-assets/assets/assets'
import { Link, useLocation, useNavigate } from "react-router-dom"

const Navbar = () => {

    const [open, setOpen] = useState(true)
    const navigate = useNavigate()

    const menuLinks = [
        { name: "Home", path: "/" },
        { name: "Cars", path: "/cars" },
        { name: "My Bookings", path: "/my-bookings" },
    ]


    const location = useLocation()
    return (
        <div className={`flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 text-gray-600 border-b border-borderColor relative transition-all
           ${location.pathname === "/" && 'bg-light'}`}>

            {/* Logo */}
            <Link to="/">
                <img src={assets.logo} alt="logo" className='h-8' />
            </Link>


            {/* navbar links  
            max-sm menas width smaller than 40rem that is mobile view */}

            <div className={`max-sm:fixed  max-sm:h-screen max-sm:w-full max-sm:top-16 max-sm:border-t border-borderColor right-0 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 
                  max-sm:p-4 transition-all duration-300 z-50
                 ${location.pathname === "/" ? 'bg-light' : 'bg-white'}
                 ${open ? 'max-sm:translate-x-0' : 'max-sm:translate-x-full'} `}>
                {menuLinks.map((menu, index) => (
                    <Link key={index} to={`/${menu.path}`}>
                        {menu.name}
                    </Link>
                ))}
                {/* search bar */}

                <div className='hidden lg:flex items-center text-sm gap-2 border border-borderColor px-3 rounded-full max-w-56'>
                    <input type='text' className='py-1.5 w-full  bg-transparent outline-none placeholder-gray-500 ' placeholder='search products' />
                    <img src={assets.search_icon} alt='search' />
                </div>

                {/* dashboard button */}
                <div className='flex gap-6 sm:items-center items-start max-sm:flex-col '>
                    <button className='cursor-pointer'
                        onClick={() => navigate("/owner")}>Dashboard</button>
                    <button className='cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition-all text-white rounded-lg'
                        onClick={() => navigate("/login")}>Login</button>
                </div>

            </div>






            {/* mobile view x button */}
            <button className='sm:hidden cursor-pointer' aria-label='="Menu' onClick={(() => setOpen(!open))}>
                <img src={open ? assets.close_icon : assets.menu_icon} alt="menu" />
            </button>

        </div>
    )
}

export default Navbar