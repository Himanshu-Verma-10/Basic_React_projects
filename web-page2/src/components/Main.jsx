import React from 'react'
import './Nav.css'

function Main() {
  return (
    <div>
        <div className="main">
            <div className="container grid grid-two-column">
                <div className="leftsd">
                    <p id="hello"> Hello,this is</p>
                    <h1>HARSHIT JAIN</h1> 
                    <p id="mi">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officiis aliquid expedita, iure voluptatum deleniti!</p>

                <button type='button' className='btn'>Hire me </button>
                </div>
                <div className="rightsd">
                    <img id='main-img' src="https://upload.wikimedia.org/wikipedia/commons/f/f4/Build-website.jpg" alt="no" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main