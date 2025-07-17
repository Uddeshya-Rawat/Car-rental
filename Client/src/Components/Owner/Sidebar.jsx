import React, { useState } from 'react'
import { assets, dummyUserData } from '../../assets/CarRental-assets/assets/assets'
import { useLocation, useNavigate } from 'react-router-dom'

const Sidebar = () => {


    const user = dummyUserData
    const location=useLocation()
    const navigate=useNavigate()

    const path=location.pathname





    return (
        <div className='w-full md:w-60 px-5 py-4 md:px-6 md:py-8  md:border-r md:border-borderColor min-h-screen flex flex-col '>
            <div className={`flex gap-4 md:gap-2 mt-10 items-center py-2 px-1 rounded-lg hover:cursor-pointer  ${path=='/owner/dashboard'?'bg-blue-200 border-l-4 border-blue-500':""}`}  onClick={()=>navigate('/owner/dashboard')}>
                <img src={assets.dashboardIconColored} />
                <p>Dashboard</p>
            </div>
            <div className={`flex gap-4 md:gap-2 mt-10 items-center py-2 px-1 rounded-lg hover:cursor-pointer  ${path=='/owner/addcar'?'bg-blue-200 border-l-4 border-blue-500':""}`} onClick={()=>navigate("/owner/addcar")}>
                <img src={assets.addIconColored} />
                <p>Add Car</p>
            </div>
            <div className={`flex gap-4 md:gap-2 mt-10 items-center py-2 px-1 rounded-lg hover:cursor-pointer  ${path=='/owner/managecars'?'bg-blue-200 border-l-4 border-blue-500':""}` } onClick={()=>navigate("/owner/managecars")}>
                <img src={assets.carIconColored} />
                <p>Manage Cars</p>
            </div>
            <div className={`flex gap-4 md:gap-2 mt-10 items-center py-2 px-1 rounded-lg hover:cursor-pointer  ${path=='/owner/managebookings'?'bg-blue-200 border-l-4 border-blue-500':""}`} onClick={()=>navigate("/owner/managebookings")}>
                <img src={assets.calendar_icon_colored} />
                <p>Manage Bookings</p>
            </div>

        </div>
    )
}

export default Sidebar