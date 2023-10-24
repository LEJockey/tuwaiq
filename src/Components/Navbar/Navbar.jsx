import React, { useContext } from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assests/logo-navbar.png'
import {FiFacebook} from 'react-icons/fi'
import {FaXTwitter} from 'react-icons/fa6'
import {IoCallOutline} from 'react-icons/io5'
import {AiOutlineProfile, AiOutlineMail, AiOutlineYoutube, AiOutlineInstagram} from 'react-icons/ai'
import arImg from '../../assests/Ar.png'
import enImg from '../../assests/uk.png'
import { langContext } from '../../Context/LangContext'


const Navbar = () => {

    const {lang, setLang, langs} = useContext(langContext) 
    function changLang() {
        lang == 'ar'? setLang('en'): setLang('ar')
    }

    

    return (
    <>
    
    
    <nav className="navbar navbar-expand-md  navbar-dark fixed-top py-0 custom-padding">


    {/* Contact Navbar */}
    
    <div className='nav-bar main-bg py-1'>
        
        <div className="container d-flex justify-content-between align-items-center">
        
        {/* Contact Icons */}
        <div className="contact-part">

            {/* Proflie */}
            <a 
                className= 'd-inline-block text-decoration-none second-color mx-1 mx-sm-2 mx-md-3' 
                href='home'
                download= '' 
            >
                <span className='second-color d-inline-block mx-0 mx-md-1'><AiOutlineProfile/></span>
                {langs[lang].Navbar.Profile}
            </a>

            {/* Phone */}
            <a 
                className= 'd-inline-block text-decoration-none second-color mx-1 mx-sm-2 mx-md-3' 
                href='tel:0544440399'
                target= '_blank'
                rel= 'noreferrer'
            >
                <span className='second-color d-inline-block mx-0 mx-md-1'><IoCallOutline/></span>
                0544440399
            </a>

            {/* Mail */}
            <a 
                className= 'd-inline-block text-decoration-none second-color mx-1 mx-sm-2 mx-md-3' 
                href=' '
                target= '_blank'
                rel= 'noreferrer'
            >
                <span className='second-color d-inline-block mx-0 mx-md-1'><AiOutlineMail/></span>
                twieaq@gmail.com
            </a>
        </div>

        {/* Social Icons */}
        <div className='social-part'>

            {/* Twitter */}
            <a 
                className= 'd-inline-block text-decoration-none second-color me-1 me-sm-2 me-md-3' 
                href=' '
                target= '_blank'
                rel= 'noreferrer' 
            >
                <span className='second-color d-inline-block me-0 me-md-1'><FaXTwitter/></span>
            </a>
            
            {/* Facebook */}
            <a 
                className= 'd-inline-block text-decoration-none second-color me-1 me-sm-2 me-md-3' 
                href=' '
                target= '_blank'
                rel= 'noreferrer' 
            >
                <span className='second-color d-inline-block me-0 me-md-1'><FiFacebook/></span>
            </a>
            
            {/* Youtube */}
            <a 
                className= 'd-inline-block text-decoration-none second-color me-1 me-sm-2 me-md-3' 
                href=' '
                target= '_blank'
                rel= 'noreferrer' 
            >
                <span className='second-color d-inline-block me-0 me-md-1'><AiOutlineYoutube/></span>
            </a>
            
            {/* Instagram */}
            <a 
                className= 'd-inline-block text-decoration-none second-color me-1 me-sm-2 me-md-3' 
                href=' '
                target= '_blank'
                rel= 'noreferrer' 
            >
                <span className='second-color d-inline-block me-0 me-md-1'><AiOutlineInstagram/></span>
            </a>
            
            {/* Language */}
            <span
                className= 'd-inline-block text-decoration-none second-color me-1 me-sm-2 me-md-3 lang cursor' 
                onClick={changLang}
            >
                <img width={30} src= {lang == 'en'? arImg : enImg} alt="AR" />
            </span>

        </div>
        </div>    
    </div>


    {/* Routing Navbar */}

    <div className="nav-container container-fluid container-lg py-2">

        <Link className="navbar-brand " to=" ">

            <img src={logo} height='80' width='100' alt="Kayan Frozen Foods" title='logo' />

        </Link>


        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            
            <span className="navbar-toggler-icon"></span>
    
        </button>

        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            
            <div className="offcanvas-header justify-content-center">

                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>

            </div>


        <div className="offcanvas-body">

            <ul className="navbar-nav justify-content-end flex-grow-1">
                
                {/* Home Link */}
                <li className="nav-item" data-bs-dismiss="offcanvas">

                    <NavLink  className="nav-link " aria-current="page" to=" ">{langs[lang].Navbar.Home}</NavLink>

                </li>
                
                {/* About Us Link */}
                <li className="nav-item" data-bs-dismiss="offcanvas">

                    <NavLink className="nav-link" to="about">{langs[lang].Navbar.AboutUs}</NavLink>

                </li>
                
                {/* Services Link */}
                <li className="nav-item" data-bs-dismiss="offcanvas">

                    <NavLink className="nav-link" to="products">{langs[lang].Navbar.OURSERVICES}</NavLink>

                </li>
                
                {/* Projects Link */}
                <li className="nav-item" data-bs-dismiss="offcanvas">

                    <NavLink className="nav-link" to="projects">{langs[lang].Navbar.OURPROJECTS}</NavLink>

                </li>
                
                {/* Media Center DropDown Menu */}
                <li className="nav-item dropdown">
                <span
                    className="nav-link dropdown-toggle "
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    {langs[lang].Navbar.MEDIACENTER}
                </span>
                    
                    
                    <ul className="dropdown-menu">

                        {/* Photos Link */}
                        <li data-bs-dismiss="offcanvas"><Link className="dropdown-item" to="photos">{langs[lang].Navbar.Photos}</Link></li>

                        <li><hr className="dropdown-divider"/></li>
                        
                        {/* Videos Link */}
                        <li data-bs-dismiss="offcanvas"><Link className="dropdown-item" to="videos">{langs[lang].Navbar.Videos}</Link></li>
                    </ul>
                </li>

                {/* Blog Link */}
                <li className="nav-item" data-bs-dismiss="offcanvas">

                    <NavLink className="nav-link" to="blog">{langs[lang].Navbar.BLOG}</NavLink>

                </li>

                <li className="nav-item" data-bs-dismiss="offcanvas">

                    <NavLink className="nav-link" to="contactus">{langs[lang].Navbar.CONTACTUS}</NavLink>

                </li>

            </ul>
        
        </div>
        </div>

    </div>
    
    </nav>
    </>

  )
}

export default Navbar