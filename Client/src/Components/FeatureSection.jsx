import React from 'react'
import Title from './Title'
import { assets, dummyCarData } from '../assets/CarRental-assets/assets/assets'
import CarCard from './CarCard'
import { useNavigate } from 'react-router-dom'

const FeatureSection = () => {
    const navigate=useNavigate()
  return (
    <div className='flex flex-col items-center py-24 px-6 md:px-16 lg:px-24 xl:px-32'>
        <div>

            {/* Title component */}
            <Title title='Featured Vehicles' subTitle='Explore our selection of premium vehivles available for your next adventure.'/>

        </div>

        {/* render the first 6 car data  */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18'>
            {
                dummyCarData.slice(0,6).map((car)=>(
                   <div key={car._id}>
                    
                    {/* carCard component */}
                    <CarCard  car={car}/>
                    </div>
                ))
            }

        </div>

        {/*button for all cars */}
        <button className='flex items-center justify-center gap-2 px-6 py-2 border border-borderColor hover:bg-gray-50 rounded-md mt-18 cursor-pointer'
            onClick={()=>{
                navigate('/cars');
                scrollTo(0,0)
            }}>
            Explore all Cars

            {/* arrow image */}
         <img src={assets.arrow_icon} alt="arrow"/>
         </button>
    </div>
  )
}

export default FeatureSection