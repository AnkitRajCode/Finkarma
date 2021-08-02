import React, { Component } from 'react';
import '../css/Footer.css';
import googlePlay from '../images/googlePlay.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import linkedin from '../images/linkedin.png';
import twitter from '../images/twitter.png';
import youtube from '../images/youtube.png';


class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footerDiv1">
                    <div className="footerBrand">FinKa₹ma</div>
                    <div className="footerAddress">Nodia,Delhi</div>
                    <div className="footerSlogan">Financial news made Simple</div>
                </div>
                <div className="footerDiv">
                    <div className="ContactUs">Contact Us</div>
                    <a href="mailto:rajankit432@gmail.com?subject=Hey,%20Ankit%20Raj" className="gmail">Finkarma@gmail.com</a>
                </div>
                <div className="footerDiv">
                    <div className="ourInfo">Our Information</div>
                    <div className="policy">Privacy Policy</div>
                    <div className="tos">Terms of Service</div>
                </div>
                <div className="footerDiv">
                    <img src={googlePlay} alt="play Store" className="playStore"/>
                </div>
                <div className="footerDivSocial">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Finkarma.in"><img src={facebook} alt="Facebook" className="SocialMediaLogo"/></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/finkarma.in/"><img src={instagram} alt="Instagram" className="SocialMediaLogo ml-3"/></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/74031084"><img src={linkedin} alt="Linkedin" className="SocialMediaLogo ml-3"/></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/finkarmaIN"><img src={twitter} alt="Twitter" className="SocialMediaLogo ml-3"/></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCaEFrIpHFPzvlHSJoBwZsyw"><img src={youtube} alt="Youtube" className="SocialMediaLogo ml-3"/></a>
                    <div className="SignOffLines">Made with ❤️ in India</div>
                    <div className="copyright">FinKa₹ma © 2021.<br/> ALL RIGHT RESERVED.</div>
                </div>
            </div>
        )
    }
}

export default Footer;