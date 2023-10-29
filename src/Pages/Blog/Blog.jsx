import React from 'react'
import SectionBg from './../../Components/SectionBg/SectionBg';
import BlogComp from './../../Components/BlogComp/BlogComp';
import useLangContext from '../../Hooks/useLangContext';
import SiteHelmet from '../../Components/SiteHelemt/SiteHelmet';
import useQueryData from '../../Hooks/useQueryData';
import LoadingComp from '../../Components/LoadingComp/LoadingComp';

const Blog = () => {

  const {lang, langs} = useLangContext()
  let {data, getDesc, getName, isLoading} = useQueryData('https://tuwaiq.ezdhaar.com/public/api/blog/showall', 'GET', 'Blog')
  
  
  const blogs = data?.data.data



  return (
    <>
    
    {isLoading? <LoadingComp/>:
     <>
    <SiteHelmet title= {langs[lang].Titles.blogtitle}/>
    <SectionBg title= {langs[lang].Titles.Blog}/>
    <BlogComp className='hide-link' blogs={blogs} getName={getName} getDesc={getDesc}/>

     </> 
    }

    
    
    </>
  )
}

export default Blog