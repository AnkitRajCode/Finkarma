import React from 'react';
import Navbar from './components/Navbar';
import landing from './pages/Landing';
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
              <Route render={()=><div className="main_title_error">404 : Page Not Found</div>} />
            </Switch>
         </BrowserRouter>
       </div>
    );
  }
}

export default App;