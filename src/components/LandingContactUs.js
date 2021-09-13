import React from 'react';
import emailjs from 'emailjs-com';

export default function LandingContactUs() {

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
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="email" name="user_email" className="headerInput" placeholder="Enter your Email"/>
        <input type="submit" value="Subscribe" className="headerButton" />
      </form>
  );
}