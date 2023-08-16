import React from 'react'
import "./Plan.css"
import map from "./map.jpeg"

const Plan = () => {
  return (
    <div className='container'>
        <div className="left">
      <h3>Plan your itinerary</h3>
      <textarea name="" id="" cols="50" rows="3" placeholder='Write or paste notes here'></textarea>
      <div className="title">
        <p>Add title</p>
        <input type="radio" />Add some items
      </div>
      <input type="text" placeholder='Add a place' />
      <h4>Estimated Cost</h4>
        <input type="text" placeholder='Your estimated cost' />
        </div>
        <div className="right">
            <img src={map} alt="" />
        </div>
    </div>
  )
}

export default Plan
