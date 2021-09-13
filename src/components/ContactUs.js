import React from 'react';
import emailjs from 'emailjs-com';
import '../css/Subscriber.css';
import { Helmet } from 'react-helmet';


export default function ContactUs() {

  function sendEmail(e) {

    e.preventDefault();

    emailjs.sendForm('service_km5w48g', 'template_jqbp70g', e.target, 'user_v6rwjtc44xQBW4ONZNpiO')
      .then((result) => {
          console.log(result.text);
          alert("🎉You have Successfully Subscribed🎉");
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <div className="subscribe subscribeBackgroundImg">
      <Helmet>
        <title>Finkarma - Subscribe</title>
        <meta
            name="description"
            content="finkarma - subscribe" 
        />
      </Helmet>
      <div className="row">
        <div className="col-md-6 mt-5">
          <form onSubmit={sendEmail}>
            <div className="h2 text-center">Subscribe Now</div>
            <input type="text" name="user_name" className="subscribeInput" placeholder="Name" />
            <input type="email" name="user_email" className="subscribeInput" placeholder="Enter your Email"/>
            <input type="number" name="contact_number" className="subscribeInput" placeholder="Contact Number" />
            <input type="submit" value="Subscribe" className="subscribeButton" />
          </form>
        </div>
        <div className="col-md-6">
        </div>
      </div>
    </div>
  );
}