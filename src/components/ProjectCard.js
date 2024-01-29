import { NavLink } from "react-router-dom";
import "./ProjectCard.css";
import City from "../assest/advcity.jpg"

import React from 'react'


const ProjectCard = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading"> Projects </h1>
        
        <div className="project-container">
        
            <div className="project-card">
                <img src={City} alt="image"/>
                <h2 className="project-title">Project Title</h2>
                <div className="pro-details">
                    <p>Details of projects</p>
                <div className="pro-button">
                    <NavLink to='url.com' className="btn"> View</NavLink>
                    <NavLink to='url.com' className="btn"> Source</NavLink>

                </div>
                </div>
                
            </div>
        </div>
        
       
    
        

    </div>
  )
}

export default ProjectCard