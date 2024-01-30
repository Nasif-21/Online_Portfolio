import { NavLink } from "react-router-dom";
import "./ProjectCard.css";


import React from 'react'


const ProjectCard = (props) => {
  return (
    
            <div className="project-card">
                <img src={props.imgsrc} alt="image"/>
                <h2 className="project-title">{props.title}</h2>
                <div className="pro-details">
                    <p>{props.text}</p>
                <div className="pro-button">
                    <NavLink to={props.view} className="btn"> Source Code</NavLink>
                    

                </div>
                </div>
                
            </div>
        
        
       
    
        

    
  )
}

export default ProjectCard