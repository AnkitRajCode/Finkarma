import '../css/CatagorySection.css';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router';
import React,{ useEffect } from 'react';

import ReactGA from "react-ga";
ReactGA.initialize( process.env.React_App_Tracking_Code );
const  Crypto = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.pageview(window.location.pathname + window.location.search);
  });
  return (
    <div className="CatagorySection">
        <Helmet>
            <title>Finkarma - Crypto</title>
            <meta
                name="description"
                content="Cryptocurrencies have been transforming the financial world." 
            />
        </Helmet>
        <div className="container">
            <div className="jumbotron pb-4 pb-md-3">
                <h2>Crypto</h2>
            </div>
            <div className="comingSoon">Coming Soon...</div>
      </div>
    </div>
  );
};

export default  withRouter(Crypto);