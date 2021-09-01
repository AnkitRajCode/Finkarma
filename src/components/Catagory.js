import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/Catagory.css';
import chat from '../images/chat.png'

class Catagory extends Component {
    render() {
        return (
            <div className="catagory pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="catagoryTitle">Catagory</div>
                            <div className="catagoryAbout">Every great design begin with an even better story</div>
                            <div className="catagoryContent">Since beginning my journey as a freelancer designer nearly 4 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use.</div>
                        </div>
                        <div className="col-md-6">
                            <div className="main">
                                <Link to="/TechnicalAnalysis" className="catagoryBox">
                                    <img src={chat} alt="chat" />
                                    <div className="catagoryBoxName">Technical Analysis</div>
                                </Link>
                                <Link to="/FundamentalAnalaysis" className="catagoryBox">
                                    <img src={chat} alt="chat" />
                                    <div className="catagoryBoxName">Fundamental Analaysis</div>
                                </Link>
                                <Link to="/Business" className="catagoryBox">
                                    <img src={chat} alt="chat" />
                                    <div className="catagoryBoxName">Business</div>
                                </Link>
                                <Link to="/Infographics" className="catagoryBox">
                                    <img src={chat} alt="chat" />
                                    <div className="catagoryBoxName">Infographics</div>
                                </Link>
                                <Link to="/PersonalFinance" className="catagoryBox">
                                    <img src={chat} alt="chat" />
                                    <div className="catagoryBoxName">Personal Finance</div>
                                </Link>
                                <Link to="/Crypto" className="catagoryBox">
                                    <img src={chat} alt="chat" />
                                    <div className="catagoryBoxName">Crypto</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Catagory;