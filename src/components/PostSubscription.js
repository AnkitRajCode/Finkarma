import { useState } from 'react';
import '../css/Subscriber.css';

const PostSubscription = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [isPending, setIsPending] =useState(false);

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
        alert("🎉You have Successfully Subscribed🎉");
        setIsPending(false);
      });
    e.target.reset();
}

  return (
        <form className="postSubscription" onSubmit={handleSubmit}>
          <input 
            type="email" 
            required
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            className="postInput"
            placeholder="Enter your Email"
          />
        { !isPending && <button className="postButton">Subscribe</button> }
        { isPending && <button disabled className="postButton">Adding Subscription...</button> }
    </form>
  );
}

export default PostSubscription ;