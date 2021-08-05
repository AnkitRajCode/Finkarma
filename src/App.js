import React from 'react';
import Navbar from './components/Navbar';
import landing from './pages/Landing';
import Infographics from './pages/Infographics';
import Subscribe from './components/Subscriber';
import Footer from './components/Footer';
import './App.css';
import {BrowserRouter, Route , Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
       <div className="mainBody">
         <Navbar></Navbar>
         <BrowserRouter>
            <Switch>
              <Route path="/" exact component={landing} />
              <Route path="/Infographics" exact component={Infographics} />
              <Route path="/Subscribe" exact component={Subscribe} />
              <Route render={()=><div className="main_title_error">404 : Page Not Found</div>} />
            </Switch>
         </BrowserRouter>
         <Footer></Footer>
       </div>
    );
  }
}

export default App;