import React from 'react'
import "./ProjectImg.css";
import ProjImg from "../assest/pro2.jpg"

const ProjectImg = () => {
  return (
    <div className='Project-imgCom'>
     <div className='imagepart'>
            <img src={ProjImg} className='ProjImg'></img>
        </div>
        <div className='heading'>
            <h1>Projects</h1>
            <p>Some of my works example</p>
        </div>
       

       
    </div>
  )
}

export default ProjectImg