import React from 'react'
import user from "./user.png"
import "./Navbar.css"

const Navbar = () => {
  return (  
      <nav class="navbar">
        <div class="nav-links">
            <h1>WanderPlan</h1>
            <p>Home</p>
            <p>About</p>
            <p>Contact Us</p>
        </div>
        <div class="image">
            <img src={user} alt="User"/>
        </div>
    </nav>
  )
}

export default Navbar
