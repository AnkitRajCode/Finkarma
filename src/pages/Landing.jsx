import React, { Component } from 'react';
import Header from '../components/Header';
import FinkarmaDaily from '../components/FinkarmaDaily.jsx';

class Landing extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <FinkarmaDaily></FinkarmaDaily>
            </div>
        )
    }
}

export default Landing;