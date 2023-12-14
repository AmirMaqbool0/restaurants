import React, { useState } from 'react'
import './style.css'
import { MoveRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'
const HotelSlider = () => {
    const [count,setCount]=useState(0)
    const images=[
        "https://lebua.com/wp-content/uploads/2023/07/44-Breeze-Angle-2-1-scaled-aspect-ratio-1366-768-scaled.jpg",
        "https://zameenblog.s3.amazonaws.com/blog/wp-content/uploads/2021/04/1440x625-16.jpg",
        "https://daddysdeals.co.za/wp-content/uploads/2023/01/melrose-arch-restaurants-main-image.jpg",
        "https://media.timeout.com/images/105746598/750/422/image.jpg"
    ];
    const nextSlide=()=>{
        setCount(count==images.length -1?0:count+1)
    }
  return (
    <div className='hote-slider-container'>
        <div className="slider-heading">
            <h1>Restaurant</h1>
        </div>
        {
            images.map((item,index)=>{
                return count== index &&(
                <NavLink to={'/morehotel'}> <div className="slide">
                    <img src={item} alt="" />
                 </div></NavLink>
                )
            })
        }
        <div className="slider-btn" onClick={nextSlide}>
            <h3>Next</h3>
             <span> <MoveRight color="#ffffff" /></span>
        </div>
    </div>
  )
}

export default HotelSlider