import React, { Component } from 'react';
import Header from '../components/Header';
import Finkarmadaily from '../components/Finkarmadaily';

class Landing extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Finkarmadaily></Finkarmadaily>
            </div>
        )
    }
}

export default Landing;