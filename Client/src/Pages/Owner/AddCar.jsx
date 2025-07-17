import React, { useState } from 'react'
import { assets } from '../../assets/CarRental-assets/assets/assets'

const AddCar = () => {
  const [image, setImage] = useState()

  const [carData,setCarData]=useState({
    brand:"",
    model:'',
    year:2025,
    price:'',
    tranimission:'',
    fuelType:"",
    categroy:"",
    location:"",
    seatingCapacity:0,
    description:""



  })


  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className='w-full'>
      {/* heading and about */}
      <div className='pl-10 pt-10 w-full p-5'>
        <h1 className='text-2xl font-semibold'>Add New Car</h1>
        <p className='text-gray-500 mt-2'>Fill in details to list a new car for booking ,including pricing , availability <br /> and car specifications.</p>
      </div>

      {/* form  */}

      <div className='pl-10 pt-10 w-full p-5'>
        <form onSubmit={(e) => handleSubmit(e)}>

          {/* image upload */}
          <div>
            <label htmlFor='car-image' className='flex items-center gap-4'>
              <img src={image ? URL.createObjectURL(image) : assets.upload_icon} atl="" className='h-20' />
              <input type='file' id='car-image' accepts='image/*' hidden onChange={(e)=>setImage(e.target.files[0])} />
              <p className='text-gray-500'>Upload a picutre of your car</p>
            </label>
          </div>

          {/* Brand input and model input */}
          <div className='mt-5 flex items-center gap-25'>
            <label htmlfor='brand'>
              <p>Brand</p>
              <input type='text' id="brand" placeholder="e.g BMW , Mercedes , Audi..." 
              onChange={(e)=>setCarData({...carData,brand:e.target.value})}
              className='border border-borderColor p-2 rounded-lg text-sm w-80 focus:outline-none focus:ring-1 focus:ring-gray-700' />
            </label>
            <label htmlFor='model'>
              <p>Model</p>
              <input type='text' id="model" placeholder="e.g X5 , E-close , m4" 
              onChange={(e)=>setCarData({...carData,model:e.target.value})}
              className='border border-borderColor p-2 rounded-lg text-sm w-80 focus:outline-none focus:ring-1 focus:ring-gray-700' />
            </label>
          </div>

          {/* year , daily price , category , Transmission , Fuel type , seating*/}
          <div className='mt-5 grid grid-cols-3 gap-5'>
            {/* year */}
            <label htmlfor='year'>
              <p>Year</p>
              <input type='number' id="year" placeholder="2025" min={2010} max={2025} 
              onChange={(e)=>setCarData({...carData,year:e.target.value})}
              className='border border-borderColor p-2 rounded-lg text-sm w-60 focus:outline-none focus:ring-1 focus:ring-gray-700' />
            </label>
            {/* daily price */}
            <label htmlFor='daily price'>
              <p>Daily Price $ </p>
              <input type='number' id="daily price" placeholder="100" min={10} max={500}
              onChange={(e)=>setCarData({...carData,price:e.target.value})}
              className='border border-borderColor p-2 rounded-lg text-sm w-60 focus:outline-none focus:ring-1 focus:ring-gray-700' />
            </label>
            {/* category */}
            <label htmlFor='Category'>
              <p>Category </p>
              <input type='text' id="Category" placeholder="Sedan" 
              onChange={(e)=>setCarData({...carData,categroy:e.target.value})}
              className='border border-borderColor p-2 rounded-lg text-sm  focus:outline-none w-60 focus:ring-1 focus:ring-gray-700' />
            </label>
            {/* transmission */}
            <label htmlFor='Transmission'>
              <p>Transmission</p>
              <input type='text' id="Transmission" placeholder="Automatic" 
              onChange={(e)=>setCarData({...carData,transmission:e.target.value})}
              className='border border-borderColor p-2 rounded-lg text-sm  focus:outline-none w-60 focus:ring-1 focus:ring-gray-700' />
            </label>
            {/* Fuel type */}
            <label htmlFor='Fuel Type'>
              <p>Fuel Type</p>
              <input type='text' id="Fuel Type" placeholder="Petrol" 
              onChange={(e)=>setCarData({...carData,fuelType:e.target.value})}
              className='border border-borderColor p-2 rounded-lg text-sm  focus:outline-none w-60 focus:ring-1 focus:ring-gray-700' />
            </label>
            {/*  seating */}
            <label htmlFor='Seating Capacity'>
              <p> Seating Capacity </p>
              <input type='number' id="Seating Capacity" placeholder="4" min={2} max={10} 
              onChange={(e)=>setCarData({...carData,seatingCapacity:e.target.value})}
              className='border border-borderColor p-2 rounded-lg text-sm w-60  focus:outline-none focus:ring-1 focus:ring-gray-700' />
            </label>
          </div>

          {/* Location and Description */}
          <div className='mt-5 grid grid-cols-1 gap-3'>
              <label htmlFor='Location'>
              <p> Location </p>
              <input type='text' id="Location" placeholder="eg. Mohini road , Delhi" 
              onChange={(e)=>setCarData({...carData,location:e.target.value})}
              className='border border-borderColor p-2 rounded-lg text-sm  w-full focus:outline-none focus:ring-1 focus:ring-gray-700' />
            </label>
             <label htmlFor='Description'>
              <p> Description </p>
              <textarea type='text' id="Description" 
              onChange={(e)=>setCarData({...carData,description:e.target.value})}
              placeholder="Describe your car , its condition and notable details..." rows={7}  className='border border-borderColor p-2 rounded-lg text-sm  w-full focus:outline-none focus:ring-1 focus:ring-gray-700' />
            </label>
            
          </div>

          {/* button */}
          <button className='bg-primary p-4 rounded-lg text-white mt-3'>List Your Car</button>

        </form>
      </div>
    </div>
  )
}

export default AddCar