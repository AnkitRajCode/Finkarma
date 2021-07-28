import React, { Component } from 'react';
import Header from './Header';
import Finkarmadaily from './Finkarmadaily';


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