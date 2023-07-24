import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Footercss.css'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='row'>
          <div className='col-md-4 col-sm-4'>
            <div className='row logo'>
            <a href = "../../public/index.html"><img src = {require("../images/logo.jpeg") } width="100px" height="30px" alt="logo" /></a>  
            </div>
            <div className='row'>
             <p>India</p>  
            </div>
            <div className='row'>
            <a href = "../../public/index.html"><p>Contact us</p></a>  
            </div>
          </div>
          <div className='empty col-md-4'>
            <div className='row'>
             
            </div>
            <div className='row'>
              
            </div>
            <div className='row'>
              
            </div>
          </div>
          <div className='col-sm-4 col-md-2'>
            <div className='row'>
            <a href = "../../public/index.html"><p>Blogs</p></a>  
            </div>
            <div className='row'>
              
            </div>
            <div className='row'>
            
            </div>
          </div>
          <div className='col-md-2 col-sm-4'>
            <div className='row'>
            <a href = "../../public/index.html"><p>About Us</p></a>  
            </div>
            <div className='row'>
            <a href = "../../public/index.html"><p>Our Story</p></a> 
            </div>
            <div className='row'>
            <a href = "../../public/index.html"><p>Our Partners</p></a>  
            </div>
          </div>
          <div className='row copy'>
              <p>Copyright 2022 Doctorspectra</p>
            </div>
        </div>
       </div>
  )
}

export default Footer