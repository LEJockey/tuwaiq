import React from 'react'
import './Layout.css'
import { Outlet } from 'react-router-dom'
import Navbar from './../Navbar/Navbar';
// import Footer from './../Footer/Footer';
import ContactBoxes from '../ContactBoxes/ContactBoxes';
import Footer from '../Footer/Footer';
import BackToTopBtn from './../BackToTopBtn/BackToTopBtn';

const Layout = () => {

    return (

    <div>

        <Navbar/>

        <Outlet></Outlet> 
        
        <BackToTopBtn/>
        <Footer/>
        {/* <ContactBoxes/> */}
    
    </div>

)
}

export default Layout