import React from 'react'
import './Products.css'
import SectionBg from './../../Components/SectionBg/SectionBg';
import Service from '../../Components/Service/Service';
import useLangContext from '../../Hooks/useLangContext';
import SiteHelmet from '../../Components/SiteHelemt/SiteHelmet';
import useQueryData from '../../Hooks/useQueryData';
import LoadingComp from '../../Components/LoadingComp/LoadingComp';


const Products = () => {

  const {lang, langs} = useLangContext()
  let {data, getDesc, getName, isLoading} = useQueryData(
    'https://tuwaiq.ezdhaar.com/public/api/service/showall', 'GET', 'Service')

  const services = data?.data.service

  


  return (
    <>

    {isLoading? <LoadingComp/> :
    <>
    <SiteHelmet title= {langs[lang].Titles.producttitle}/>
    <SectionBg title={langs[lang].Navbar.OURSERVICES}/>
    <Service className='white-bg' title= {langs[lang].Titles.tuwser} getName={getName} getDesc={getDesc} services={services}/>
    </>
    }
    </>
  )
}

export default Products