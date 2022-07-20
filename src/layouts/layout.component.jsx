import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../components/footer/Footer.component';
import Header from '../components/header/Header.component';
import About from './about/About.layout';
import Authentication from './authentication/Authentication.layout';
import Contact from './contact/Contact.layout';
import Home from './home/Home.layout';

function Layout(){
    return(
        <>
        <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/contact' element={<Contact/>} />
                    <Route path='/authentication' element={<Authentication/>} />
                </Routes>
            </BrowserRouter>
        <Footer/>
        </>
    )
}

export default Layout;