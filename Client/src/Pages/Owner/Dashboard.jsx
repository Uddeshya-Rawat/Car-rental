import React from 'react'
import Sidebar from '../../Components/Owner/Sidebar'
import Title from '../../Components/Title'
import { assets, dummyDashboardData } from '../../assets/CarRental-assets/assets/assets'

const Dashboard = () => {

  const userData = dummyDashboardData
  return (
    <>
      <div className='flex flex-row gap-4 '>

        {/* main section */}
        <div className='pl-10 pt-10 w-full p-5'>

          {/* heading and about */}
          <div>
            <h1 className='text-2xl font-semibold'>Admin Dashboard</h1>
            <p className='text-gray-500 mt-2'>Monitor overall platform performance including total cars , bookings ,<br></br>
              revenue  and recent activities</p>
          </div>

          {/* info */}
          <div className='mt-10 py-2 flex gap-10'>

            {/* Total Cars */}
            <div className='border flex border-borderColor justify-between  p-4 rounded-lg w-60 items-center'>
              <div className='flex flex-col'>
                <span className='text-gray-500'>Total Cars</span>
                <h2 className='text-2xl'>{userData.totalCars}</h2>
              </div>
              <div className='rounded-full  flex items-center justify-center w-10 h-10 bg-blue-100'>
                <img src={assets.carIconColored} alt="" className='h-7' />
              </div>
            </div>

            {/* total bookings */}
            <div className='border flex border-borderColor justify-between p-4 rounded-lg w-60 items-center'>
              <div className='flex flex-col'>
                <span className='text-gray-500'>Total Bookings</span>
                <h2 className='text-2xl'>{userData.totalBookings}</h2>
              </div>
              <div className='rounded-full  flex items-center justify-center w-10 h-10 bg-blue-100'>
                <img src={assets.listIconColored} alt="" className='h-7' />
              </div>

            </div>

            {/* Pending bookings */}
            <div className='border flex border-borderColor justify-between p-4 rounded-lg w-60 items-center'>
              <div className='flex flex-col'>
                <span className='text-gray-500'>Pending Bookings</span>
                <h2 className='text-2xl'>{userData.pendingBookings}</h2>
              </div>
              <div className='rounded-full  flex items-center justify-center w-10 h-10 bg-blue-100'>
                <img src={assets.cautionIconColored} alt="" className='h-7' />
              </div>

            </div>

            {/* Completed bookings */}
            <div className='border flex border-borderColor justify-between p-4 rounded-lg w-60 items-center'>
              <div className='flex flex-col'>
                <span className='text-gray-500'>Completed Bookings</span>
                <h2 className='text-2xl'>{userData.completedBookings}</h2>
              </div>
              <div className='rounded-full w-10 h-10 flex items-center justify-center p-2 bg-blue-100'>
                <img src={assets.listIconColored} alt="" className='h-7' />
              </div>

            </div>
          </div>


          {/* recent bookings */}
          <div className='flex gap-5 w-full py-5'>

            <div className='border border-borderColor p-5 rounded-lg w-200 '>

              {/* heading */}
              <h3 className='text-l font-semibold '>Recent Bookings</h3>
              <p className='text-gray-500 mt-2'>Latest customer bookings</p>
              <div className='flex flex-col  mt-3'>

                {/* every booking */}
                {userData.recentBookings.map((booking, index) => (
                  <div className='flex items-center justify-between' key={index}>

                    {/* brand name and booking date */}
                    <div className=' flex justify-between items-center  p-4 gap-5 '>
                      <div className='rounded-full  flex items-center justify-center w-10 h-10 bg-blue-100'>
                        <img src={assets.listIconColored} alt="" className='h-7' />
                      </div>
                      <div>
                        <p className='text-lg'>{booking.car.brand} {booking.car.model}</p>
                        <p className='text-gray-500 text-sm '>{booking.pickupDate.split("T")[0]}</p>
                      </div>

                    </div>

                    <div className=' flex gap-5 justify-center items-center '>

                      {/* price */}
                      <p className='text-gray-500'>${booking.price}</p>

                      {/* status */}
                      <div className='p-1 border rounded-2xl w-30 flex justify-center'>{booking.status}</div>
                    </div>


                  </div>
                ))}


              </div>


            </div>

            <div className='border border-borderColor p-5 rounded-lg h-full w-65'>
              <div>
                <h3 className='text-l'>Monthly revenue</h3>
                <p className='text-sm text-gray-500'>Revenue for current month</p>
              </div>
              <div className='text-blue-800 text-3xl font-bold  mt-6'>
                ${userData.monthlyRevenue}
              </div>
            </div>

          </div>
        </div>

      </div>

    </>
  )
}

export default Dashboard