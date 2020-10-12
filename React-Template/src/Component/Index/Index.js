import React, { Component } from 'react';
import About from "./../About/About";
import Footer from "./../Footer/Footer";
import Home from "./../Home/Home";
import Profile from "./../Profile/Profile";
import Portfolio from "./../Portfolio/Portfolio";
import Social from "./../Social/Social";
import Work from "./../Work/Work";

class Index extends Component {
  render(){
    return (
      <div>
        <Home/>
        <Work/>
        <Portfolio/>
        <Profile/>
        <About />
        <Social/>
        <Footer/>
 
        
      </div>
    );
  }
  
}

export default Index;
