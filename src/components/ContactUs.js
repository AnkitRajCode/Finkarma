import { useState } from 'react';
import '../css/Subscriber.css';
import { Helmet } from 'react-helmet';
import { withRouter, useHistory } from 'react-router';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [isPending, setIsPending] =useState(false);
  const history = useHistory();

  const handleSubmit = (e) =>{
    e.preventDefault();
    const data = { email:email,name:name, mobile:mobile };

    setIsPending(true);

    fetch('https://kpiro.com/savedetails',{
        method: 'POST',
        headers: { "content-Type" : "application/json" },
        body: JSON.stringify(data)
    }).then(()=>{
        console.log('new data added');
        setIsPending(false);
        history.push('/');
    });

}



  return (
    <div className="subscribe subscribeBackgroundImg">
      <Helmet>
        <title>Finkarma - Subscribe</title>
        <meta
            name="description"
            content="Subscribe to Finkarma to get simplified digital information about the financial markets at your fingertips." 
        />
      </Helmet>
      <div className="row">
        <div className="col-md-6 mt-5">
          <form onSubmit={handleSubmit}>
            <div className="h2 text-center">Subscribe Now</div>
            <input 
              type="text" 
              required
              value={name}
              onChange={(e)=> setName(e.target.value)}
              className="subscribeInput"
              placeholder="Enter your Name"
            />
            <input 
              type="email" 
              required
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              className="subscribeInput"
              placeholder="Enter your Email"
            />
            <input 
              type="number" 
              required
              value={mobile}
              onChange={(e)=> setMobile(e.target.value)}
              className="subscribeInput"
              placeholder="Contact Number"
            />
            
            { !isPending && <button className="subscribeButton">Subscribe</button> }
            { isPending && <button disabled className="subscribeButton">Adding Subscription...</button> }
          </form>
        </div>

        <div className="col-md-6"></div>

      </div>
    </div>
  );
}

export default withRouter(ContactUs) ;