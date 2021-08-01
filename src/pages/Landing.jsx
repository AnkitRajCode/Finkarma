import React, { Component } from 'react';
import Header from '../components/Header';
import Finkarmadaily from '../components/Finkarmadaily';
import Catagory from '../components/Catagory';
import Subscriber from '../components/Subscriber';
import Inforgraphics from '../components/Inforgraphics';


class Landing extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Finkarmadaily></Finkarmadaily>
                <Catagory></Catagory>
                <Subscriber></Subscriber>
                <Inforgraphics></Inforgraphics>
            </div>
        )
    }
}

export default Landing;