import React from 'react'
import './Photos.css'
import SectionBg from '../../Components/SectionBg/SectionBg';
import PhotoComp from '../../Components/PhotoComp/PhotoComp';
import SiteHelmet from '../../Components/SiteHelemt/SiteHelmet';
import useLangContext from '../../Hooks/useLangContext';


const Photos = () => {

  const {lang, langs} = useLangContext()
  
  return (
    <>
    <SiteHelmet title= {langs[lang].Titles.phototitle}/>
    <SectionBg/>
    <PhotoComp className='hide-link'/>
    </>

  )
}

export default Photos