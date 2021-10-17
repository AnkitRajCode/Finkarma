import {BrowserRouter, Route , Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import landing from './pages/Landing';
import Infographics from './pages/Infographics';
import FinkarmaDaily from './pages/FinkarmaDaily';
import Catagory from './pages/Catagory';
import Business from './pages/Business';
import Crypto from './pages/Crypto';
import FundamentalAnalysis from './pages/FundamentalAnalysis';
import PersonalFinance from './pages/PersonalFinance';
import TechnicalAnalysis from './pages/TechnicalAnalysis';
import Footer from './components/Footer';
import './App.css';
import SeePost from './pages/SeePost';
import PrivacyPolicy from './components/PrivacyPolicy';
import toc from './components/TermsAndCondition';
import ContactUs from './components/ContactUs';
import { Helmet } from 'react-helmet';
const App = () => {
let myString = "/:call";
  myString = myString.replace(/\s+/g, '-');
  const url = `${myString}`;
    return (
       <div className="App">
         <Navbar></Navbar>
         <BrowserRouter>
         <Helmet>
           <title>Finkarma - Home</title>
           <meta
            name="description"
            content="Financial news and Knowledge " 
           />
         </Helmet>
            <Switch>
              <Route path="/" exact component={landing} />
              <Route path="/Infographics" exact component={Infographics} />
              <Route path="/FinkarmaBytes" exact component={FinkarmaDaily} />
              <Route path="/Catagory" exact component={Catagory} />
              <Route path="/Business" exact component={Business} />
              <Route path="/Crypto" exact component={Crypto} />
              <Route path="/PrivacyPolicy" exact component={PrivacyPolicy} />
              <Route path="/toc" exact component={toc} />
              <Route path="/FundamentalAnalysis" exact component={FundamentalAnalysis} />
              <Route path="/PersonalFinance" exact component={PersonalFinance} />
              <Route path="/TechnicalAnalysis" exact component={TechnicalAnalysis} />
              <Route path="/subscribe" >
                <div>
                  <ContactUs/>
                </div>
              </Route>
              <Route path={url} exact component={SeePost} />
              <Route render={()=><div className="main_title_error">404 : Page Not Found</div>} />
            </Switch>
         </BrowserRouter>
         <Footer></Footer>
       </div>
    );
}

export default App;