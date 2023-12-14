import React, { useState } from 'react'
import  './style.css'
import Select from 'react-select';
import Navbar from '../../Componets/Navbar/Navbar'
import MoreHotelBanner from '../../Componets/MoreHotelBanner/MoreHotelBanner'
import { Search, Trash,FileX } from 'lucide-react';
import HotelCard from '../../Componets/HotelCard/HotelCard';
import Footer from '../../Componets/Footer/Footer';

const options = [
  { value: 'Titel', label: 'Titel' },
  { value: 'Price', label: 'Price' },
  { value: 'City', label: 'City' },
];
const options1 = [
  { value: 'Five Star', label: 'Five Star' },
  { value: 'Four Star', label: 'Four Star' },
  { value: 'Three Star', label: 'Three Star' },
];
const customStyles = {
  control: base => ({
    ...base,
    height: 50,
    // minHeight: 35
  })
};
const MoreHotel = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div className='more-hotel-container'>
        <Navbar/>
        <MoreHotelBanner/>
        <div className="more-hotel-heading">
            <span>Search restaurant</span>
        </div>
        <div className="search-restrurent-bar">
            <div className="titel-filter">
  <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        styles={customStyles}
        
      />
            </div>
            <div className="resturent-search">
              <input type="text" placeholder='Search Restaurant' />
              <Search />
            
            </div>
            <div className="rating-filter">
            <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options1}
        styles={customStyles}
        
      />
            </div>
            <div className="search-bar-btn">
              <button>Login</button>
              <button style={{background:'black'}}>Signup</button>
            </div>
        </div>
        <div className="hotel-card-list">
        <HotelCard/>
        <HotelCard/>
        <HotelCard/>
        <HotelCard/>
        <HotelCard/>
        <HotelCard/>
        <HotelCard/>
        <HotelCard/>
        <HotelCard/>
        <HotelCard/>
        <HotelCard/>
        <HotelCard/>
        <HotelCard/>
        <HotelCard/>
        <HotelCard/>
        <HotelCard/>
        </div>
        <Footer/>
        
    </div>
  )
}

export default MoreHotel