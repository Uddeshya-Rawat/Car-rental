import React, { useEffect, useState } from 'react'
import { assets, dummyCarData } from '../../assets/CarRental-assets/assets/assets'

const ManageCars = () => {

  const [cars, setCars] = useState([])

  const fetchCarData = async () => {
    setCars(dummyCarData)
  }

  useEffect(() => {
    fetchCarData()
  }, [])

  return (
    <div className='w-full'>
      {/* heading and about */}
      <div className='pl-10 pt-10 w-full p-5'>
        <h1 className='text-2xl font-semibold'>Manage Cars</h1>
        <p className='text-gray-500 mt-2'>View ll the listed cars, update their details ,or remove them form <br /> the booking platform
          revenue  and recent activities</p>
      </div>

      <div className='pl-10 pt-10 w-[85%] p-5'>
        <table className='w-full border border-borderColor text-left text-sm text-gray-600 '>
          <thead className='text-gray-500'>
            <tr>
              <th className='p-3 font-medium'>Car</th>
              <th className='p-3 font-medium'>Category</th>
              <th className='p-3 font-medium'>Price</th>
              <th className='p-3 font-medium'>Status</th>
              <th className='p-3 font-medium'>Actions</th>

            </tr>
          </thead>
          <tbody>
            {cars.map((car, index) => (
              <tr key={index} className='border-t border-borderColor'>

                {/* car image and name */}
                <td className='p-3 flex items-center gap-3'>
                  <img src={car.image} alt="" className='h-12 w-12 aspect-square rounded-md object-cover' />
                  <div className='max-md:hidden'>
                    <p className='font-medium'>{car.brand} {car.model}</p>
                    <p className='font-medium'>{car.seatingCapacity} {car.transmission}</p>

                  </div>


                </td>

                {/* car category */}
                <td className='p-3 max-md:hidden'>{car.category}</td>

                {/* price */}
                <td className='p-3 max-md:hidden'>${car.pricePerDay}/day</td>

                {/* status */}
                <td className='p-3 max-md:hidden'>
                  <span className={`px-3 py-1 rounded-full text-xs ${car.isAvaliable ? 'bg-green-100 text-green-500' : ""}`}>
                    {
                      car.isAvaliable ? "Available" : "Unavailable"
                    }
                  </span>
                </td>

                {/* actions */}
                <td className='flex  items-center '>
                  <img src={car.available ? assets.eye_close_icon :assets.eye_icon} alt="" className='cursor-pointer'/>
                  <img src={assets.delete_icon} alt="" className='cursor-pointer'/>

                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  )
}

export default ManageCars