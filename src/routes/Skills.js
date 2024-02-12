import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Skillimg } from '../components/Skillimg'
import SkillCard from '../components/SkillCard'


const Skills = () => {
  return (
    <div>
      <NavBar/>
      <Skillimg/>
      <SkillCard/>
      <Footer/>
    </div>
  )
}

export default Skills