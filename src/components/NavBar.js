import React, { useState } from 'react'
import "./NavBar.css"
import NasLogo from "../assest/NasLogo.png";
import {Link} from "react-router-dom"
import {FaBars, FaTimes} from 'react-icons/fa';

const NavBar = () => {
  const [click, setClick]=useState(false)
  const handleClick=()=>setClick(!click);

  const [color, setColor] = useState(false)
  const changeColor=()=>{
    if(window.scrollY>=100){ setColor(true);}
    else{setColor(false);}
  }
  window.addEventListener("scroll",changeColor);

  
  
  return (
    <div className={color? "navbar navbar-bg" : "navbar"}>
      <Link to="/"><img src={NasLogo} className='navbarlogo'></img></Link>
      <ul className={click? "MenuBarItem active" :"MenuBarItem"}>
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
      </ul>
      <div className='hamburger' onClick={handleClick}>
        {
          click ?(<FaTimes size={20} style={{color:"#fff"}} />
          ):(<FaBars size={20} style={{color:"#fff"}}/>)
        }
          
        </div>
    
  

    </div>
  )
}

export default NavBar