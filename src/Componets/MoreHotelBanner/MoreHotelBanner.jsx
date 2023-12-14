import React from 'react'
import'./style.css'
import { ChevronLeft } from 'lucide-react'
import { NavLink } from 'react-router-dom'
const MoreHotelBanner = () => {
  return (
    <div className="more-hotel-banner-container">
    <div className='more-hotel-banner'>
        <NavLink to={'/'}><div className="back-link">
            <span><ChevronLeft color="#ffffff" /></span>
            <h2>Back</h2>
        </div></NavLink>
    </div>
    </div>
  )
}

export default MoreHotelBanner