import React, { useState } from 'react'
import './style.css'
import Navbar from '../../Componets/Navbar/Navbar'
import ResturentCard from '../../Componets/ResturentCard/ResturentCard'
import ReactPlayer from 'react-player'
import { Forward, Star, ThumbsUp } from 'lucide-react'
import SimilerResturent from '../../Componets/SimilerResturent/SimilerResturent'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import NewsLetter from '../../Componets/NewsLatter/NewsLetter'
import Footer from '../../Componets/Footer/Footer'
import ClintFeedBack from '../../Componets/ClintFeedBack/ClintFeedBack'

const HotelDetail = () => {
    
  const [value, onChange] = useState(new Date());
  return (
    <div className='hotel-detail-container'>
        <Navbar/>
       <div className="hotel-detail-banner"> </div>
       <div className="resturent-media">
        <div className="resturent-card">
        <ResturentCard/>
        </div>
       
       <div className="resturenr-video">
        <div className="resturent-video-titel">
            <span>Best restaurant in the world</span>
        </div>
        <div className="resturent-video-player">
        <ReactPlayer url='https://www.youtube.com/watch?v=KaSFoOF6Yw0' width='100%' height='100%' />

        </div>
        <div className="resturent-video-btn">
            <button><ThumbsUp /> 2.5K</button>
            <button><Forward /> Share</button>
        </div>
        <div className="hotel-calender">
            <div className="calendar-heading">
                <span>Find the time to meet</span>
            </div>
        <Calendar onChange={onChange} value={value}  />
        </div>
        <div className="booking-btn">
            <span>Book this Restaurant Now</span>
        </div>
       </div>
       <div className="simili-resturent">
        <SimilerResturent/>
        <SimilerResturent/>
        <SimilerResturent/>
        <div className="show-more-btn">
            <span>Show More</span>
        </div>
       </div>
       </div>
       <NewsLetter/>
       <div className="hotel-detail-rating">
        <div className="hotel-detail-rating-heading">
            <span>5</span>
        </div>
        <div className="stars">
        {
            Array(5).fill().map((item,i)=>
             <Star color="#e4f21c" fill='#e4f21c' key={i}/>
            )
        }
        </div>
       </div>
       <div className="hotel-clint-feedback">
       <ClintFeedBack/>
       <ClintFeedBack/>
       <ClintFeedBack/>
       <ClintFeedBack/>
       <ClintFeedBack/>
       <ClintFeedBack/>
       <ClintFeedBack/>
       </div>
       
       <Footer/>
        </div>
  )
}

export default HotelDetail