import React from 'react'
import { assets, dummyUserData } from '../../assets/CarRental-assets/assets/assets'
import { Link } from 'react-router-dom'

const NavbarOwner = () => {
    const user = dummyUserData

    return (
        <div className='flex items-center justify-between px-6 md:px-20  gap-2 py-4 text-gray-500 border-b border-borderColor relative transition-all'>
           <div>
             <Link to="/">
                <img src={assets.logo} alt="" className='h-7' />
            </Link>
           </div>
            <div className='flex justify-evenly items-center  w-full p-2'>
                <Link to="/">
                    Home
                </Link>
                <Link to="/cars">
                    Cars
                </Link>
                <Link to="/about">
                    About
                </Link>
            </div>

            <button className='bg-blue-600 p-2 rounded-sm w-30 text-white'>Signup </button>


        </div>
    )
}

export default NavbarOwner