import React from 'react'
import "./Skillimg.css";
import SImage from "../assest/skills.jpg"

export const Skillimg = () => {
  return (
    <div className='SklImg'>
    <div className='imagepart'>
            <img src={SImage} className='Skillimage'></img>
        </div>
        <div className='heading'>
            <h1>Skills</h1>
            <p>Skills I have learned so far </p>
        </div>

    </div>
  )
}
