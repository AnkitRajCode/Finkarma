import React, { Component } from 'react';
import Header from '../components/Header';
import Finkarmadaily from '../components/Finkarmadaily';
import Catagory from '../components/Catagory';
import Subscriber from '../components/Subscriber';


class Landing extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Finkarmadaily></Finkarmadaily>
                <Catagory></Catagory>
                <Subscriber></Subscriber>
            </div>
        )
    }
}

export default Landing;