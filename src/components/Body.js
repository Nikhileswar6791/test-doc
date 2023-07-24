import React from 'react'
import "./Bodycss.css"
import 'bootstrap/dist/css/bootstrap.css';
const Body = () => {
  return (
    <div className='Body'>
        <h4 className='text'>How the technology works</h4>
    <div className='row row-body'>
          <div className='col-md-6'>
             <p>We use the novel technology of Hyperspectral imaging to check the freshness of your produce from the inside coupled with image processing which checks the exterior as well.</p>
          </div>
          <div className='col-md-6'>
          <img src = {require("../images/images/image8.png")} width={"100%"} alt = "Spectral Imaging"></img>
         
          </div>
    </div>
    <div className='row row-body'>
    <div className='col-md-6'>
    <img src = {require("../images/images/image7.jpg")} width={"100%"} alt = "Spectral Imaging"></img>
    
    </div>
    <div className='col-md-6'>
    <p>This is layered further with artificial intelligence which processes the data and gives accurate results on specific contents of the fresh produce which further determines its freshness, days to get fully ripe and identify and alert for any unwanted contamination (if any).</p>
    </div>
</div>
<hr className='hr'></hr>
<h4 className='text'>Solutions for entire food supply chain</h4>
<div className='row row-body'>
    <div className='col-md-6 col-lg-4 res-grid'>
      <div className='text-image'>
        <div className='blur'>
        <div className='t-img'>
         <h3>Importers/Exporters</h3>
         </div>
         </div>
         <img className = 'sol' src = {require("../images/images/image9.jpg")} alt = "Spectral Imaging"></img>
      </div>
    
    </div>
    <div className='col-md-6 col-lg-4  res-grid'>
      <div className='text-image'>
        <div className='blur'>
        <div className='t-img'>
         <h3>Growers</h3>
         </div>
         </div>
         <img className = 'sol' src = {require("../images/images/image10.jpg")} alt = "Spectral Imaging"></img>
      </div>
    </div>
    <div className='col-md-6 col-lg-4  res-grid'>
    <div className='text-image'>
        <div className='blur'>
        <div className='t-img'>
         <h3>Retailers</h3>
         </div>
         </div>
         <img className = 'sol' src = {require("../images/images/image11.jpg")}  alt = "Spectral Imaging"></img>
      </div>
    </div>
    <div className='col-md-6 col-lg-4  res-grid'>
    <div className='text-image'>
        <div className='blur'>
        <div className='t-img'>
         <h3>Wholesalers/Traders</h3>
         </div>
         </div>
         <img className = 'sol' src = {require("../images/images/image12.png")}  alt = "Spectral Imaging"></img>
      </div>
    </div>
    <div className='col-md-6 col-lg-4  res-grid'>
    <div className='text-image'>
        <div className='blur'>
        <div className='t-img'>
         <h3>Food chains / processors</h3>
         </div>
         </div>
         <img className = 'sol' src = {require("../images/images/image13.jpg")}  alt = "Spectral Imaging"></img>
      </div>
  
    </div>
    <div className='col-md-6 col-lg-4  res-grid'>
    <div className='text-image'>
        <div className='blur'>
        <div className='t-img'>
         <h3>Manufacturers/Brand owners</h3>
         </div>
         </div>
         <img className = 'sol' src = {require("../images/images/image14.jpg")}  alt = "Spectral Imaging"></img>
      </div>
   
    </div>
</div>
<div className='contact row'>
<div className='col-md-3'>
 
  </div>
  <div className='col-md-6'>
  <img src = {require("../images/images/image15.png")} alt="Reach out to us"></img>
  </div>
  <div className='col-md-3'>
 
  </div>
</div>
<hr className='hr'></hr>
<div className='row form'>
  <div className='col-md-6'>
  <h4 className='text'>Would like to see a demo, Reach out to us</h4>
  </div>
  <div className='col-md-6'>
  <form>
  <div className="row mb-3">
    <label for="inputEmail3" className="col-sm-2 col-form-label"><p>Email</p></label>
    <div className="col-sm-10">
      <input type="email" className="form-control form-text" id="inputEmail3"/>
    </div>
  </div>
  <div className="row mb-3">
    <label for="NameclassName" className="col-sm-2 col-form-label"><p>Name</p></label>
    <div className="col-sm-10">
      <input type="text" className="form-control form-text" id="NameclassName"/>
    </div>
  </div>
  <div className="row mb-3">
    <label for="c-NameclassName" className="col-sm-2 col-form-label"><p>Company Name</p></label>
    <div className="col-sm-10">
      <input type="text" className="form-control form-text" id="c-NameclassName"/>
    </div>
  </div>
  <input type="submit" className="button" value = "Book a Demo"/>
</form>
  </div>
</div>
    </div>
   
  )
}

export default Body