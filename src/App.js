import React from 'react';
import Navbar from './components/Navbar';
import landing from './pages/Landing';
import Infographics from './pages/Infographics';
import FinkarmaDaily from './pages/FinkarmaDaily';
import Catagory from './pages/Catagory';
import Business from './pages/Business';
import Crypto from './pages/Crypto';
import FundamentalAnalaysis from './pages/FundamentalAnalaysis';
import PersonalFinance from './pages/PersonalFinance';
import TechnicalAnalysis from './pages/TechnicalAnalysis';
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
              <Route path="/FinkarmaDaily" exact component={FinkarmaDaily} />
              <Route path="/Catagory" exact component={Catagory} />
              <Route path="/Business" exact component={Business} />
              <Route path="/Crypto" exact component={Crypto} />
              <Route path="/FundamentalAnalaysis" exact component={FundamentalAnalaysis} />
              <Route path="/PersonalFinance" exact component={PersonalFinance} />
              <Route path="/TechnicalAnalysis" exact component={TechnicalAnalysis} />
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