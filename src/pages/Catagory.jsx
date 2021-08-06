import React, { Component } from 'react';
import '../css/Catagory.css';
import vector from '../images/headerCover.jpg';

class Catagory extends Component {
    render() {
        return (
            <div className="catagory">
                <div className="container">
                    <div className="jumbotron pb-4 pb-md-3">
                        <h2>Catagory</h2>
                    </div>
                    <div className="row pb-5 catagoryFlex">
                        <div className="col-md-6">
                            <a href="/TechnicalAnalysis" target="_blank" rel="noopener noreferrer"><img src={vector} alt="catagory" className="catagoryImage"/></a>
                        </div>
                        <div className="col-md-6">
                            <a href="/TechnicalAnalysis" target="_blank" rel="noopener noreferrer" className="catagoryTitle">Technical Analysis</a>
                            <div className="catagoryAbout">Every great design begin with an even better story</div>
                            <div className="catagoryContent">Since beginning my journey as a freelancer designer nearly 4 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use, I am quietly confident, naturally curious.</div>
                        </div>
                    </div>
                    <div className="row pb-5">
                        <div className="col-md-6">
                            <a href="/FundamentalAnalaysis" target="_blank" rel="noopener noreferrer"><img src={vector} alt="catagory" className="catagoryImage"/></a>
                        </div>
                        <div className="col-md-6">
                            <a href="/FundamentalAnalaysis" target="_blank" rel="noopener noreferrer" className="catagoryTitle">Fundamental Analaysis</a>
                            <div className="catagoryAbout">Every great design begin with an even better story</div>
                            <div className="catagoryContent">Since beginning my journey as a freelancer designer nearly 4 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use, I am quietly confident, naturally curious.</div>
                        </div>
                    </div>
                    <div className="row pb-5 catagoryFlex">
                        <div className="col-md-6">
                            <a href="/Business" target="_blank" rel="noopener noreferrer"><img src={vector} alt="catagory" className="catagoryImage"/></a>
                        </div>
                        <div className="col-md-6">
                            <a href="/Business" target="_blank" rel="noopener noreferrer" className="catagoryTitle">Business</a>
                            <div className="catagoryAbout">Every great design begin with an even better story</div>
                            <div className="catagoryContent">Since beginning my journey as a freelancer designer nearly 4 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use, I am quietly confident, naturally curious.</div>
                        </div>
                    </div>
                    <div className="row pb-5">
                        <div className="col-md-6">
                            <a href="/Infographics" target="_blank" rel="noopener noreferrer"><img src={vector} alt="catagory" className="catagoryImage"/></a>
                        </div>
                        <div className="col-md-6">
                            <a href="/Infographics" target="_blank" rel="noopener noreferrer" className="catagoryTitle">Infographics</a>
                            <div className="catagoryAbout">Every great design begin with an even better story</div>
                            <div className="catagoryContent">Since beginning my journey as a freelancer designer nearly 4 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use, I am quietly confident, naturally curious.</div>
                        </div>
                    </div>
                    <div className="row pb-5 catagoryFlex">
                        <div className="col-md-6">
                            <a href="/PersonalFinance" target="_blank" rel="noopener noreferrer"><img src={vector} alt="catagory" className="catagoryImage"/></a>
                        </div>
                        <div className="col-md-6">
                            <a href="/PersonalFinance" target="_blank" rel="noopener noreferrer" className="catagoryTitle">Personal Finance</a>
                            <div className="catagoryAbout">Every great design begin with an even better story</div>
                            <div className="catagoryContent">Since beginning my journey as a freelancer designer nearly 4 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use, I am quietly confident, naturally curious.</div>
                        </div>
                    </div>
                    <div className="row pb-5">
                        <div className="col-md-6">
                            <a href="/Crypto" target="_blank" rel="noopener noreferrer"><img src={vector} alt="catagory" className="catagoryImage"/></a>
                        </div>
                        <div className="col-md-6">
                            <a href="/Crypto" target="_blank" rel="noopener noreferrer" className="catagoryTitle">Crypto</a>
                            <div className="catagoryAbout">Every great design begin with an even better story</div>
                            <div className="catagoryContent">Since beginning my journey as a freelancer designer nearly 4 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use, I am quietly confident, naturally curious.</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Catagory;