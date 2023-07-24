import React,{useState} from 'react'
import "./Navbarcss.css"
import {FaBars, FaTimes} from "react-icons/fa";
const Navbar = () => {
    const [onclick,setclick] = useState(false);
    const handleclick = () => setclick(!onclick);
  return (
    <div className='header'>
       <a href = "../../public/index.html"><img src = {require("../images/logo.jpeg") } width="150px" height="60px" alt="logo" /></a>  
       <ul className={onclick ? 'nav-menu active' : 'nav-menu'}>
         <li>
           <a href = "index.html" >Home</a>
         </li>
         <li>
            <a href = "index.html">Solutions we offer</a>
         </li>
        <li>
             <a href = "index.html">How the technology works</a>
        </li>
        <li>
            <a href = "index.html">About</a>
        </li>
       </ul>
        <div className='icon' onClick={handleclick}>
            {onclick ? ( <FaTimes size= {30} style = {{color:'black'}}/>) 
           :(
            <FaBars size= {30} style = {{color:'black'}}/>)}
        </div>
    </div>
  )
}

export default Navbar