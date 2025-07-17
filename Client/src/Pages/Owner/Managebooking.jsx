import React, { useState } from 'react'
import { dummyMyBookingsData } from '../../assets/CarRental-assets/assets/assets'

const Managebooking = () => {

  const [booking, setBookings] = useState([])

  const fetchOwnerBookings = async () => {
    setBookings(dummyMyBookingsData)
  }

  useState(() => {
    fetchOwnerBookings()
  })

  return (
    <div className='w-full'>
      {/* heading and about */}
      <div className='pl-10 pt-10 w-full p-5'>
        <h1 className='text-2xl font-semibold'>Manage Bookings</h1>
        <p className='text-gray-500 mt-2'>track all customer bookings , approve or cancel requests , and <br /> manage bookings.</p>
      </div>

      <div className='pl-10 pt-10 w-[85%] p-5'>
        <table className='w-full border border-borderColor text-left text-sm text-gray-600 '>

          {/* headings  */}
          <thead className='text-gray-500'>
            <tr>
              <th className='p-3 font-medium'>Car</th>
              <th className='p-3 font-medium'>Date Range</th>
              <th className='p-3 font-medium'>Total</th>
              <th className='p-3 font-medium'>Payment</th>
              <th className='p-3 font-medium'>Actions</th>

            </tr>
          </thead>
          <tbody>
            {booking.map((bookings, index) => (
              <tr key={index} className='border-t border-borderColor text-gray-500'>

                {/* image */}
                <td className='p-3 flex items-center gap-3'>
                  <img src={bookings.car.image} alt="" className='h-12 w-12 aspect-square rounded-md object-cover' />
                  <p className='fotn-medium max-md:hidden'>{bookings.car.brand}</p>
                </td>

                {/* pickup and return date */}
                <td className='p-3 max-md:hidden'>
                  {bookings.pickupDate.split("T")[0]} to {bookings.returnDate.split("T")[0]}

                </td>

                {/* total price */}
                <td className='p-3'>
                  $ {bookings.price}
                </td>

                {/* payment */}
                <td className='p-3 max-md:hidden'>
                  <span className='bg-gray-100 px-3 py-1 rounded-full text-xs'>offline</span>

                </td>

                {/* actions */}
               <td className='p-3'>
                 {bookings.status === "pending" ? (
                  <select value={bookings.status} className='px-2 py-1.5 mt-1 text-gray-500 border border-borderColor rounded-md outline-none'>
                    <option value="pending">Pending</option>
                    <option value="cancelled">Cancelled</option>
                    <option value="confirmed">Confirmed</option>
                  </select>
                ) :
                  (
                    
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${bookings.status==='confirmed' ? 'bg-green-100 text-green-500' : 'bg-red-100 text-red-500'
                    }`}>{bookings.status}</span>

                )}
               </td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  )
}

export default Managebooking