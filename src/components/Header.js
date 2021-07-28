import React, { Component } from 'react';
import '../css/Header.css';
import coner from '../images/coner.png';
import dot from '../images/dot.png';
import headerCover from '../images/cover.png';
import headerGraph from '../images/graph.png';
import headerChat from '../images/chat.png';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="row">
                    <div className="col-md-6">
                        <img src={coner} alt="coner"className="headerCorner" />
                        <img src={dot} alt="dot" className="headerDot"/>
                        <div className="subscriberDisplay">
                            <span className="subscriberDisplayText">Loved by</span>
                            <span className="subscriberDisplayNumber">  1,00,456+ Subscriber</span>
                        </div>
                        <div className="headerTagLine">Financial News Made for you</div>
                        <div className="headerText">Join Finshots and get your daily dose of the latest, most important Financial News delivered on your device.</div>
                        <form action="" method="">
                            <input type="email" name="" placeholder="Enter Your Email" className="headerInput" />
                            <input type="button" name="" value="Subscribe" className="headerButton" />
                        </form>
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