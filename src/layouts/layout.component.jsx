import {React, Fragment} from 'react';
import Footer from '../components/footer/Footer.component';
import Header from '../components/header/Header.component';
import About from './about/About.layout';
import Authentication from './authentication/Authentication.layout';
import Contact from './contact/Contact.layout';

function Layout(){
    return(
        <Fragment>
            <Header/>
            <Contact/>
            <Footer/>
        </Fragment>
    )
}

export default Layout;