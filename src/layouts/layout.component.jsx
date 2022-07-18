import {React, Fragment} from 'react';
import Header from '../components/header/Header.component';
import Home from './home/Home.layout';

function Layout(){
    return(
        <Fragment>
            <Header/>
            <Home/>
        </Fragment>
    )
}

export default Layout;