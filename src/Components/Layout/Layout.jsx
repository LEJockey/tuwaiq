import React from 'react'
import './Layout.css'
import { Outlet } from 'react-router-dom'
import { Offline} from "react-detect-offline";
import {FiWifiOff} from 'react-icons/fi'
import Navbar from './../Navbar/Navbar';
import ContactBoxes from '../ContactBoxes/ContactBoxes';
import Footer from '../Footer/Footer';
import BackToTopBtn from './../BackToTopBtn/BackToTopBtn';
import useLangContext from '../../Hooks/useLangContext';


const Layout = () => {

    const {lang, langs} = useLangContext()

    return (

    <div>

        <Navbar/>

        <Outlet></Outlet> 
        
        <BackToTopBtn/>

        <Footer/>
        {/* <ContactBoxes/> */}

        <Offline>
            <div className='custom-position d-flex justify-content-end'>
                <span
                className="networkStatus alert alert-danger d-flex justify-content-center"
                >
                    <div className='mx-2'>{langs[lang].Titles.connect}</div>
                    <div className='mx-1'> <FiWifiOff className='mb-1' /> </div>
                
                </span>
            </div>
        </Offline>
    
    </div>

)
}

export default Layout