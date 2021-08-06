import React, { Component } from 'react';
import '../css/Finkarmadaily.css';
import vector from '../images/headerCover.jpg'

class Finkarmadaily extends Component {
    render() {
        return (
            <div className="finkarmaDailyLanding pt-5">
                <div className="container">
                    <div className="row fdFlex">
                        <div className="col-md-6">
                            <div className="fdTitle">Finkarma Daily</div>
                            <div className="fdAbout">Every great design begin with an even better story</div>
                            <div className="fdContent">Since beginning my journey as a freelancer designer nearly 4 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use, I am quietly confident, naturally curious.</div>
                        </div>
                        <div className="col-md-6">
                            <div className="card mb-3 shadow">
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src={vector} alt="vector" className="dailyImg"/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">How To Find The Best Exits Using Volume Climax</h5>
                                            <p className="card-text">
                                                <p className="small mb-2 text-muted">July 24, 2021</p>
                                                If Price is the king, then the volume is the queen. This statement shows the significance of the price and volume relationship...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-3 shadow">
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src={vector} alt="vector" className="dailyImg"/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">The Biggest Tradding Mistakes that Cost me Lakhs of Rupees.</h5>
                                            <p className="card-text">
                                                <p className="small mb-2 text-muted">July 17, 2021</p>
                                                I have not failed. I’ve just found 10,000 ways that won’t work.” —Thomas Edison In my small trading career, I have made lots of mis...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Finkarmadaily;