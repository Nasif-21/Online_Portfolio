import React from 'react'
import "./AboutImg.css";
import AbImg from "../assest/abtme.jpg"

const AboutImg = () => {
  return (
    <div className='AboutMeIm'>
        <div className='AbtMeImgpart'>
            <img src={AbImg}className='AboutPic'></img>

        </div>
         <div className='heading3'>
         <h1>About Me </h1>
         <p>Lets get a details of myself </p>
         </div>
        
        

    </div>
  )
}

export default AboutImg