import React from 'react'
import "./HomeImg.css";
import profilepic from "../assest/Profile .png";
import { Link } from 'react-router-dom';
//import Project from '../routes/Project';


const HomeImg = () => {
  return (
    <div className='profileImg'>
        <div className='musk'>
            <img src={profilepic} className='profilepic'></img>

        </div>
        <div className='container'>
            <p>Assalamualikum,  </p>
            <p>I am </p>
            {/* <section className="animation">
            <div className="first"><div>SHEIKH MUHTASIM NASIF</div></div>
            <div className="second"><div>Web Developer</div></div>
            <div className="third"><div>Software Engineer</div></div>
            </section> */}
            <p>SHEIKH MUHTASIM NASIF</p>
            <h1>Web Developer</h1>

            <Link to='/project'  className='btn'> Projects</Link>
            <Link to="/contact" className='btn-light'>Contact</Link>
           
        </div>
        
        </div>
  )
}

export default HomeImg