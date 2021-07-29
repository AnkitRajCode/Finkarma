import React, { Component } from 'react';
import '../css/Catagory.css';

class Catagory extends Component {
    render() {
        return (
            <div className="catagory py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="catagoryTitle">Catagory</div>
                            <div className="catagoryAbout">Every great design begin with an even better story</div>
                            <div className="catagoryContent">Since beginning my journey as a freelancer designer nearly 4 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use.</div>
                        </div>
                        <div className="col-md-6">
                            <div className="main">
                                <div className="catagoryBox"></div>
                                <div className="catagoryBox"></div>
                                <div className="catagoryBox"></div>
                                <div className="catagoryBox"></div>
                                <div className="catagoryBox"></div>
                                <div className="catagoryBox"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Catagory;