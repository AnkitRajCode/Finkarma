import React, { Component } from 'react';
import '../css/Crypto.css';
import vector from '../images/headerCover.jpg';

class Crypto extends Component {
    render() {
        return (
            <div className="crypto">
                <div className="container">
                    <div className="jumbotron pb-4 pb-md-3">
                        <h2>Crypto</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Crypto;