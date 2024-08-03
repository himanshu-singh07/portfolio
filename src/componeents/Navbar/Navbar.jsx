/* eslint-disable no-unused-vars */
import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
          <div className='navbar-left'>
            <h3>Time To Program</h3>

          </div>
          <div className='navbar-right'>
              <ul>
                  <a>Home</a>
                  <a>Skills</a>
                  <a>Work Experience</a>
                  <a>Contact Me</a>
              </ul>
              <button>Hire Me</button>
          </div>
    </div>
  )
}

export default Navbar