import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ProjectImg from '../components/ProjectImg'
import ProjectCard from '../components/ProjectCard'

const Project = () => {
  return (
    <div>
      <NavBar/>
      <ProjectImg/>
      <ProjectCard/>
      <Footer/>
    </div>
  )
}

export default Project