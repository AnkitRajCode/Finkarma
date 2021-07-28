import React, { Component } from 'react';
import '../css/Finkarmadaily.css';
import vector from '../images/headerCover.jpg'

class Finkarmadaily extends Component {
    render() {
        return (
            <div className="finkarmaDaily pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div class="card mb-3 shadow">
                                <div class="row no-gutters">
                                    <div class="col-md-4">
                                        <img src={vector} alt="vector" className="dailyImg"/>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">How To Find The Best Exits Using Volume Climax</h5>
                                            <p class="card-text">
                                                <p class="small mb-2 text-muted">July 24, 2021</p>
                                                If Price is the king, then the volume is the queen. This statement shows the significance of the price and volume relationship...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card mb-3 shadow">
                                <div class="row no-gutters">
                                    <div class="col-md-4">
                                        <img src={vector} alt="vector" className="dailyImg"/>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">The Biggest Tradding Mistakes that Cost me Lakhs of Rupees.</h5>
                                            <p class="card-text">
                                                <p class="small mb-2 text-muted">July 17, 2021</p>
                                                I have not failed. I’ve just found 10,000 ways that won’t work.” —Thomas Edison In my small trading career, I have made lots of mis...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="fdTitle">Finkarma Daily</div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Finkarmadaily;