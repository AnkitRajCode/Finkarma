import React,{ useEffect } from 'react';
import { withRouter } from 'react-router';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import ReactGA from "react-ga";

import analysis from '../images/magnifyingGlass.png'
import statistics from '../images/chart.png'
import personal from '../images/wallet.png'
import handshake from '../images/handshake.gif';
import pieChart from '../images/pieChart.png'
import bitcoin from '../images/bit.png'

import '../css/Catagory.css';

ReactGA.initialize( process.env.React_App_Tracking_Code );

const Catagory = () => {
    
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    });

    return (
        <div className="category">
            <Helmet>
                <title>Finkarma - Category</title>
                <meta
                    name="description"
                    content="We classify our razor-sharp writeups under separate sections for a quicker access to your likings."
                />
            </Helmet>
            <div className="container">
                <div className="row">
                    <Link to="/TechnicalAnalysis" className="col-md-4 mb-5 text-decoration-none">
                        <div className="categoryCard">
                            <img src={analysis} alt="category" className="categoryImage" />
                            <div className="categoryTitle">Technical Analysis</div>
                            <div className="categoryContent">We at Finkarma offer a wide range of Technical Analysis Modules which help you in  intermediate and advanced learners.</div>
                            <div className="categoryArrow">
                                <i className="fas fa-angle-double-right"></i>
                            </div>
                        </div>
                    </Link>
                    <Link to="/FundamentalAnalysis" className="col-md-4 mb-5 text-decoration-none">
                        <div className="categoryCard">
                            <img src={statistics} alt="category" className="categoryImage" />
                            <div className="categoryTitle">Fundamental Analaysis</div>
                            <div className="categoryContent">Fundamental Analysis is a cornerstone for any investor who likes to build wealth on his capital. A method of assessing the intrinsic value of a stock.</div>
                            <div className="categoryArrow">
                                <i className="fas fa-angle-double-right"></i>
                            </div>
                        </div>
                    </Link>
                    <Link to="/PersonalFinance" className="col-md-4 mb-5 text-decoration-none">
                        <div className="categoryCard">
                            <img src={personal} alt="category" className="categoryImage" />
                            <div className="categoryTitle">Personal Finance</div>
                            <div className="categoryContent">You should really perceive the basic elements of financial planning such as budgeting, debt, credit, loans and retirement etc.</div>
                            <div className="categoryArrow">
                                <i className="fas fa-angle-double-right"></i>
                            </div>
                        </div>
                    </Link>
                    <Link to="/Business" className="col-md-4 mb-5 text-decoration-none">
                        <div className="categoryCard">
                            <img src={handshake} alt="category" className="categoryImage" />
                            <div className="categoryTitle">Business</div>
                            <div className="categoryContent">Business is the activity of making one's living or making money by producing or buying and selling products such as goods and services.</div>
                            <div className="categoryArrow">
                                <i className="fas fa-angle-double-right"></i>
                            </div>
                        </div>
                    </Link>
                    <Link to="/Infographics" className="col-md-4 mb-5 text-decoration-none">
                        <div className="categoryCard">
                            <img src={pieChart} alt="category" className="categoryImage" />
                            <div className="categoryTitle">Infographics</div>
                            <div className="categoryContent">Infographics are the graphical or visual representation of the data. Data can easily put you off-track and soon you may end up lost in numbers.</div>
                            <div className="categoryArrow">
                                <i className="fas fa-angle-double-right"></i>
                            </div>
                        </div>
                    </Link>
                    <Link to="/Crypto" className="col-md-4 mb-5 text-decoration-none">
                        <div className="categoryCard">
                            <img src={bitcoin} alt="category" className="categoryImage" />
                            <div className="categoryTitle">Crypto</div>
                            <div className="categoryContent">Cryptocurrencies have been transforming the financial world. These digital currencies may allow for a secure online payment.</div>
                            <div className="categoryArrow">
                                <i className="fas fa-angle-double-right"></i>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Catagory);