import React, { useEffect, useState } from 'react'
import './BlogDetails.css'
import SectionBg from './../../Components/SectionBg/SectionBg';
import ImageComp from '../../Components/ImageComp/ImageComp';
import useLangContext from '../../Hooks/useLangContext';
import { useParams } from 'react-router-dom';
import useQueryData from '../../Hooks/useQueryData';
import {GrStatusGood} from 'react-icons/gr'
import axios from 'axios';
import SiteHelmet from '../../Components/SiteHelemt/SiteHelmet';
import LoadingComp from '../../Components/LoadingComp/LoadingComp';

const BlogDetails = () => {
    
    const {id} = useParams()
    const {lang, langs} = useLangContext()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [comments, setComments] = useState('')
    const [blog_id, setBlog_id] = useState(id)
    const [submissionStatus, setSubmissionStatus] = useState(false);
    

    let {data, isLoading} = useQueryData(`https://tuwaiq.ezdhaar.com/public/api/blog/show/${id}`, 'GET', 'blogdetails')
    const commentsCount =  data?.data.count
    const blogDetails = data?.data.blog
    const blogComments = data?.data.blog.comments
    

    
    const   handleSubmit = (e) => {
        e.preventDefault();
        setBlog_id(id)
        const commentDetails = {blog_id, name, email, comments}
        axios.post('https://tuwaiq.ezdhaar.com/public/api/comment/store', commentDetails)
        .then((response) => {console.log(response)
        setSubmissionStatus(true)})
        .catch((error) => {
            console.log(error);
        });
        
        console.log(commentDetails)
        setName('');
        setEmail('');
        setComments(''); 
        window.location.reload()
    }

    useEffect(() => {
        // Reset submission status after a delay
        if (submissionStatus) {

          const timer = setTimeout(() => {
            setSubmissionStatus(false);
          }, 3000);
    
          return () => clearTimeout(timer);
        }
      }, [submissionStatus]);

    // Function to convert Date string to default date
    function formatCommentDate(dateString) {
        const date = new Date(dateString);
        // const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
        const formattedDate = date.toLocaleDateString();
        return formattedDate;
    }

return (
    <>
    {isLoading? <LoadingComp/> : 
    <>
    <SiteHelmet title={blogDetails?.name[lang]}/>
    <section className='blog-details'> 
    <SectionBg title= {blogDetails?.name[lang]}/>
        <div className="container py-5">

            <div className="blog-image mb-1 rounded Border shadowing overflow-hidden">

                <ImageComp src={blogDetails?.image}/>

            </div>

            <article className="blog-article">

                <div className="blog-date">
                    <p>{formatCommentDate(blogDetails?.created_at)}</p> 
                    <h2 className='mt-2 mx-3 custom-head article-title position-relative'>{blogDetails?.name[lang]}</h2>
                    <p>{blogDetails?.description[lang]}</p> 
                </div>

            </article>

        </div>

        <div className="container pb-5">
            
            <hr />

            <h3>{langs[lang].ContactForm.add}</h3>
            <hr />
            <form className='row' onSubmit={handleSubmit}>

                {/* Name Input */}
                <div className="form-floating my-2 col-sm-6 px-sm-1 px-0">
                    <input type="text" className="form-control" id="floatingName" placeholder="Name" required value={name} onChange={(e)=>setName (e.target.value)}/>
                    {/* Label */}
                    <label className={`mx-2 ${lang === 'ar' ? ' end-0' : 'start-0'}`}
                    htmlFor="floatingName"
                    >
                    {langs[lang].ContactForm.name}
                    </label>
                </div>
                
                {/* Email Imput */}
                <div className="form-floating my-2 col-sm-6 px-sm-1 px-0">
                    <input type="Email" className="form-control" id="floatingEmail" placeholder="Email" required value={email} onChange={(e)=>setEmail (e.target.value)}/>
                    {/* Label */}
                    <label className={`mx-2 ${lang === 'ar' ? ' end-0' : 'start-0'}`}
                    htmlFor="floatingEmail"
                    >
                    {langs[lang].ContactForm.email}
                    </label>
                </div>
                
                {/* Comment Input */}
                <div className="form-floating my-2 col-12 px-0 px-sm-1">
                    <textarea className="form-control" placeholder="Leave your commment here" id="floatingTextarea" cols={40} value={comments} onChange={(e)=>setComments (e.target.value)} ></textarea>
                    <label className={`mx-2 ${lang === 'ar' ? ' end-0' : 'start-0'}`} 
                    htmlFor="floatingTextarea"
                    >
                    {langs[lang].ContactForm.comment}
                    </label>
                </div>
                
                <div className="col-12 px-0 px-sm-1 mt-3 mb-2">
                    <button className='custom-btn z-1' type="submit">{langs[lang].ContactForm.add}</button>
                </div>

                {/* Success Msg */}
                <div className={`success-msg w-auto ${submissionStatus ? '' : 'hidden'}`}>
                    {submissionStatus && (
                <div className="alert alert-success w-auto fade-message">
                    {langs[lang].successMsg.com} <GrStatusGood />
                </div>
                )}
                </div>

            </form>

            <hr />
            <p> 
            {langs[lang].ContactForm.comments} {commentsCount} 
            </p>
            {blogComments?.map((comment, idx) => 
                <div key={idx} className='lite-bg p-3 mb-3 rounded'>
                    <h3 className='h4 main-color fw-bold'>{comment?.name} <br /> <span className='h6'>{formatCommentDate(comment?.created_at)}</span></h3>
                    <p>{comment.comments}</p>
                </div>
            )
            }
            
        </div>
    </section>
    </>}
    </>
    
)
}

export default BlogDetails