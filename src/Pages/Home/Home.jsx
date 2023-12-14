import React from 'react'
import './style.css'
import Navbar from '../../Componets/Navbar/Navbar'
import HeroSection from '../../Componets/HeroSection/HeroSection'
import HotelSlider from '../../Componets/HotelSlider/HotelSlider'
import Footer from '../../Componets/Footer/Footer'
const Home = () => {
  return (
    <div className='home-container'>
   <Navbar/>
   <HeroSection/>
   <HotelSlider/>
   <Footer/>
    </div>
  )
}

export default Home