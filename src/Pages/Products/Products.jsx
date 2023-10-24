import React from 'react'
import './Products.css'
import SectionBg from './../../Components/SectionBg/SectionBg';
import Service from '../../Components/Service/Service';
import useLangContext from '../../Hooks/useLangContext';
import SiteHelmet from '../../Components/SiteHelemt/SiteHelmet';


const Products = () => {

  const {lang, langs} = useLangContext()


  return (
    <>
    <SiteHelmet title= {langs[lang].Titles.producttitle}/>
    <SectionBg title={langs[lang].Navbar.OURSERVICES}/>
    <Service className='white-bg' title= {langs[lang].Titles.tuwser}/>
    </>
  )
}

export default Products