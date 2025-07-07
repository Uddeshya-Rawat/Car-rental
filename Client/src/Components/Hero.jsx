import React, { useState } from 'react'
import { assets, cityList } from '../assets/CarRental-assets/assets/assets'

const Hero = () => {

    const [pickupLocation, setPickupLocation] = useState('')
    return (

        <div className='h-screen flex flex-col items-center justify-center  gap-14 bg-light text-center'>
            {/*hero section text */}
            <h1 className='text-4xl md:text-5xl font-semibold'> Luxury cars on Rent</h1>

            {/* form  */}
            <form className='flex flex-col md:flex-row items-center sm:justify-evenly md:items-center justify-between p-6 rounded-lg md:rounded-full  w-full sm:max-w-[40rem] max-w-[20rem] lg:max-w-[60rem]  md:mask-x-to-yellow-200
    bg-white shadow-[0px_8px_20px-rgba(0,0,0,0.1'>
                <div className='flex  justify-center flex-col md:flex-row md:items-center gap-10 min-md:ml-8'>
                    <div className='flex flex-col items-start gap-2'>

                        {/* select city options */}
                        <select required value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)} className='border-none ring-0'>
                            <options value=''>Pickup Location</options>
                            {cityList.map((city, index) => (
                                <option value={city} key={index}>{city}</option>
                            ))}
                        </select>
                        <p className='px-1 text-sm text-gray-500'>{pickupLocation ? pickupLocation : "Please select location"}</p>
                    </div>

                    {/* select pickup date 
                     new Date().toISOString().split('T')[0] this helps to  set calender to todays date so that user can set the past dates */}
                    <div className='flex flex-col items-start gap-2'>
                        <label htmlFor='pickup-date'>Pick-Up Date</label>
                        <input type='date' id='pickup-date' min={new Date().toISOString().split('T')[0]} className='text-sm text-gray-500' required />
                    </div>

                    {/* select return date */}
                    <div className='flex flex-col items-start gap-2'>
                        <label htmlFor='pickup-date'>Return Date</label>
                        <input type='date' id='pickup-date' min={new Date().toISOString().split('T')[0]} className='text-sm text-gray-500' required />
                    </div>
                    
                    {/* search button */}
                    <button className='flex items-center jsutify-center gap-1 px-9 py-3 max-sm:mt-4 bg-primary hover:bg-primary-dull text-white rounded-full cursor-pointer'>
                        <img src={assets.search_icon} alt='search' className='brightness-300' />
                        Search
                    </button>
                </div>

            </form>

            {/* image  */}
            <img src={assets.main_car} alt='car' className='max-h-74' />
        </div>
    )
}

export default Hero