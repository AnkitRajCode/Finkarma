import React, { Component } from 'react';
import '../css/Navbar.css';
import logo from '../images/logo.png';

class Navbar extends Component {
   componentDidMount(){
      const body = document.querySelector("body");
      const navbar = document.getElementById("navbar-main");
      const menu = document.querySelector(".menu-list");
      const menuBtn = document.getElementById("burger-menu");
      const logo= document.querySelector(".gfg-logo");
      window.onscroll = ()=>{
         if (window.scrollY > 20){
            navbar.classList.add("sticky");
            logo.classList.add("make-smaller");
         }
         else{
            navbar.classList.remove("sticky");
            logo.classList.remove("make-smaller");
         }
      }

      //Animation for the menu btn
      var currentState="menu";
      let line1= document.getElementById("line-1");
      let line2= document.getElementById("line-2");
      let line2Container=document.getElementById("line-2-container");
      let line3= document.getElementById("line-3");
      
      menuBtn.addEventListener("click",()=>{
         if(currentState==="menu"){
            line1.classList.add("cross-state-1");
            line2Container.classList.add("cross-state-2");
            line2.classList.add("cross-state-2");
            line3.classList.add("cross-state-3");
            
            menu.classList.add("active");
            menuBtn.classList.add("hide");
            body.classList.add("disabledScroll");
            currentState="cross"
         }
         else{
            line1.classList.remove("cross-state-1");
            line2Container.classList.remove("cross-state-2");
            line2.classList.remove("cross-state-2");
            line3.classList.remove("cross-state-3");
            menu.classList.remove("active");
            menuBtn.classList.remove("hide");
            body.classList.remove("disabledScroll");
            currentState="menu";
         }
      });
   }
   render() {
      return (
         <nav className="bar" id="navbar-main">
            <div className="content">
                <div className="logo"><img src={logo} alt="logo" className="gfg-logo" /><a href="/">FinKa₹ma</a></div>

                <ul className="menu-list">
                  <li><a href="/" className="nav_home">Home</a></li>
                  <li><a href="/finkarmaDaily" className="nav_event">Finkarma Daily </a></li>
                  <li><a href="/Catagory" className="nav_projects">Catagory </a></li>
                  <li><a href="/Infographics" className="nav_about">Infographics </a></li>
                </ul>

               <a className="subButton" href="/subscribe">Subscribe</a>

                <div className="burger-menu" id="burger-menu">
                    <div className="line-1" id="line-1"></div>
                    <div className="line-2-container" id="line-2-container">
                        <div className="line-2" id="line-2"></div>
                    </div>
                    <div className="line-3" id="line-3"></div>
                </div>
            </div>
         </nav>
      )
   }
}

export default Navbar;