import React from 'react'
import './Photos.css'
import SectionBg from '../../Components/SectionBg/SectionBg';
import PhotoComp from '../../Components/PhotoComp/PhotoComp';
import SiteHelmet from '../../Components/SiteHelemt/SiteHelmet';
import useLangContext from '../../Hooks/useLangContext';
import useQueryData from '../../Hooks/useQueryData';
import Display from '../../Components/Display/Display';
import LoadingComp from './../../Components/LoadingComp/LoadingComp';


const Photos = () => {

  const {lang, langs} = useLangContext()

  let {data, isLoading} = useQueryData(
    'https://tuwaiq.ezdhaar.com/public/api/image/showall', 'GET', 'Images')

    const items = data?.data.images
  
  
  return (
    <>
    {isLoading? <LoadingComp/>:
    <>

    <SiteHelmet title= {langs[lang].Titles.phototitle}/>
    <SectionBg/>
    <Display items={items} hideVideoIcon='hide-link' />
    
    </>
  }
    </>
    


  )
}

export default Photos