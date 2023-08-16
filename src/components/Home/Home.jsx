import React from 'react'
import banner from "./banner.avif"
import img1 from "./Bangalore-Palace-768x432.jpg"
import img2 from "./Chola-Temples.jpg"
import img3 from "./Devanahalli-Fort-768x432.jpg"
import img4 from "./Janpad-Loka-768x414.png"
import {  Link } from "react-router-dom";

import "./Home.css"

const Home = () => {
  return (
    <div>
      <div className="banner">
       <img src={banner} alt="Banner" />
      </div>
      <div className="input">
        <input type="text" id="date" placeholder='Enter travel date'/>
        <input type='text' id='dest' placeholder='Enter travel destination'/>
        <Link to="/plan"><button>Submit</button></Link>
      </div>
      <div className="more">
        <h3>Places to Visit</h3>
        <div className="cards">
            <img src={img1} alt="Card" />
            <img src={img2} alt="Card" />
            <img src={img3} alt="Card" />
            <img src={img4} alt="Card" />
        </div>
      </div>
    </div>
  )
}

export default Home
