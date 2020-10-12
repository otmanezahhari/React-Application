import React, { Component } from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Index from "./Component/Index/Index";
import Contact from "./Component/Contact/Contact";
import Navbar from "./Component/Navbar/Navbar";


class App extends Component {
  render(){
    return (
      <BrowserRouter>
        
        <Navbar />
        <Route exact path='/' component={Index}/>
        <Route exact path="/Contact" component={Contact}/>
      </BrowserRouter>
    );
  }
  
}

export default App;
