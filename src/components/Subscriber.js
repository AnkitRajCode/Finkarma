import React, { Component } from 'react';
import '../css/Subscriber.css';

class Subscriber extends Component {
    render() {
        return (
            <div className="Subscriber">
                <div className="joinedSubscriber">Join 3,50,000+ subscribers</div>
                <div className="tagLineSubscriber">We will never spam you. Pinky promise 🙌</div>
                <form action="" method="">
                    <input type="email" name="" placeholder="Enter Your Email" className="subscribeInput" />
                    <input type="button" name="" value="Subscribe" className="subscribeButton" />
                </form>
                <div className="signingOffLineSub">Be a part of our ever growing community.</div>
            </div>
        )
    }
}

export default Subscriber;