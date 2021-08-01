import React, { Component } from 'react';
import '../css/Inforgraphics.css';
import vector from '../images/headerCover.jpg'


class Inforgraphics extends Component {
    render() {
        return (
            <div className="inforgraphics py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <div class="card mb-3">
                                <img src={vector} class="card-img-top" alt="vector" />
                                <div class="card-body">
                                    <h5 class="card-title">How To Find The Best Exits Using Volume Climax</h5>
                                    <p class="card-text"><small class="text-muted">July 24, 2021</small></p>
                                    <p class="card-text">If Price is the king, then the volume is the queen. This statement shows the significance of the price and volume relationship...</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div class="card mb-3">
                                <img src={vector} class="card-img-top" alt="vector" />
                                <div class="card-body">
                                    <h5 class="card-title">How To Find The Best Exits Using Volume Climax</h5>
                                    <p class="card-text"><small class="text-muted">July 24, 2021</small></p>
                                    <p class="card-text">If Price is the king, then the volume is the queen. This statement shows the significance of the price and volume relationship...</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div class="card mb-3">
                                <img src={vector} class="card-img-top" alt="vector" />
                                <div class="card-body">
                                    <h5 class="card-title">How To Find The Best Exits Using Volume Climax</h5>
                                    <p class="card-text"><small class="text-muted">July 24, 2021</small></p>
                                    <p class="card-text">If Price is the king, then the volume is the queen. This statement shows the significance of the price and volume relationship...</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div class="card mb-3">
                                <img src={vector} class="card-img-top" alt="vector" />
                                <div class="card-body">
                                    <h5 class="card-title">How To Find The Best Exits Using Volume Climax</h5>
                                    <p class="card-text"><small class="text-muted">July 24, 2021</small></p>
                                    <p class="card-text">If Price is the king, then the volume is the queen. This statement shows the significance of the price and volume relationship...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Inforgraphics;