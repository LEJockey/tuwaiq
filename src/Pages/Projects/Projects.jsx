import React from 'react'
import './Projects.css'
import SectionBg from '../../Components/SectionBg/SectionBg'
import FacadeDesign from '../../Components/FacadeDesign/FacadeDesign'
import useLangContext from '../../Hooks/useLangContext';
import SiteHelmet from '../../Components/SiteHelemt/SiteHelmet';


const Projects = () => {

  const {lang, langs} = useLangContext()


  return (
    <section>
      <SiteHelmet title= {langs[lang].Titles.projecttitle}/>
      <SectionBg title={langs[lang].Navbar.OURPROJECTS}/>
      <FacadeDesign className='hide-link'/>
    </section>
  )
}

export default Projects