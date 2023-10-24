import React from 'react'
import './Videos.css'
import SectionBg from '../../Components/SectionBg/SectionBg';
import VideoComp from '../../Components/VideoComp/VideoComp';
import useLangContext from '../../Hooks/useLangContext';
import SiteHelmet from '../../Components/SiteHelemt/SiteHelmet';


const Videos = () => {
  const {lang, langs} = useLangContext()
  return (
    
    <>
    <SiteHelmet title= {langs[lang].Titles.videotitle}/>
    <SectionBg/>
    <VideoComp className= 'hide-link'/>
    
    
    </>
  )
}

export default Videos