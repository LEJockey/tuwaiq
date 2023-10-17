import React from 'react'
import './Projects.css'
import SectionBg from '../../Components/SectionBg/SectionBg'
import FacadeDesign from '../../Components/FacadeDesign/FacadeDesign'

const Projects = () => {
  return (
    <section>
      <SectionBg title= 'Our Projects'/>
      <FacadeDesign className='hide-link'/>
    </section>
  )
}

export default Projects