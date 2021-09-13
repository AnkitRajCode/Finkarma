import React, { Component } from 'react';
import '../css/Header.css';
import coner from '../images/coner.png';
import dot from '../images/dot.png';
import headerCover from '../images/cover.png';
import headerGraph from '../images/graph.png';
import headerChat from '../images/chat.png';
import LandingContactUs from './LandingContactUs';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="row">
                    <div className="col-md-6">
                        <img src={coner} alt="coner"className="headerCorner" />
                        <img src={dot} alt="dot" className="headerDot"/>
                        <div className="headerTagLine">Financial Knowledge Simplified</div>
                        <div className="headerText">Join Finkarma and you will get simplified digital information about the financial markets at your fingertips.</div>
                        <LandingContactUs />
                    </div>
                    <div className="col-md-6 VectorSection">
                        <img src={headerChat} alt="headerChat" className="headerChat"/>
                        <img src={headerGraph} alt="headerGraph" className="headerGraph"/>
                        <img src={headerCover} alt="headerCover" className="headerCover"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;