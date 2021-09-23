import React,{ useEffect } from 'react';
import { withRouter } from 'react-router';
import ReactGA from "react-ga";
import Header from '../components/Header';
import Finkarmadaily from '../components/Finkarmadaily';
import Catagory from '../components/Catagory';
import Inforgraphics from '../components/Inforgraphics';
import AppDownloadImage from '../components/AppDownloadImage';

ReactGA.initialize( process.env.React_App_Tracking_Code );

const Landing = () => {

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    });
    return ( 
        <div>
            <Header />
            <Finkarmadaily />
            <Catagory />
            <AppDownloadImage />
            <Inforgraphics />
        </div>
    );
}
 
export default withRouter(Landing);
