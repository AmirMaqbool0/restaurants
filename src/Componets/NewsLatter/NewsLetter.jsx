import React from 'react'
import './style.css'
const NewsLetter = () => {
  return (
    <div className='news-letter-containerr'>
        <div className="news-letter">
            <div className="news-letter-heading">
                <span>Subscribe Our Newsletter</span>
                <div className="news-letter-search-bar">
                    <input type="text" placeholder='Enter email id' />
                    <button>Send</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter