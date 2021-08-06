import React, { Component } from 'react';
import '../css/PersonalFinance.css';
import vector from '../images/headerCover.jpg';

class PersonalFinance extends Component {
    render() {
        return (
            <div className="PersonalFinance">
                <div className="container">
                    <div className="jumbotron pb-4 pb-md-3">
                        <h2>Presonal Finance</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default PersonalFinance;