import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import FeatureSection from '../Components/FeatureSection'
import Banner from '../Components/Banner'
import Testimonial from '../Components/Testimonial'
import Newletter from '../Components/Newletter'

const Home = () => {
  return (
    <div>
        
        <Hero/>
        <FeatureSection/>
        <Banner/>
        <Testimonial/>
        <Newletter/>
    </div>
  )
}

export default Home