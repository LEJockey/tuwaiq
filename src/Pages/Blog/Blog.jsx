import React from 'react'
import './Blog.css'
import SectionBg from './../../Components/SectionBg/SectionBg';
import BlogComp from './../../Components/BlogComp/BlogComp';
import useLangContext from '../../Hooks/useLangContext';
import SiteHelmet from '../../Components/SiteHelemt/SiteHelmet';

const Blog = () => {

  const {lang, langs} = useLangContext()


  return (
    <>

    <SiteHelmet title= {langs[lang].Titles.blogtitle}/>
    <SectionBg title= {langs[lang].Titles.Blog}/>
    <BlogComp className='hide-link'/>

    
    </>
  )
}

export default Blog