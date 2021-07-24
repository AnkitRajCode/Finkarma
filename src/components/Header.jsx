import React, { Component } from 'react';
import '../css/Header.css';
import coner from '../images/coner.png';
import dot from '../images/dot.png';

class Header extends Component {
    render() {
        return (
            <div>
                <img src={coner} alt="coner"className="headerCorner" />
                <img src={dot} alt="dot" className="headerDot"/>
            </div>
        )
    }
}

export default Header;