import React from "react";
import {Link} from "react-router-dom";
// import {NavbarSection,Logo,NavbarLink,UlList,FlexItem,ListItem} from "./navestyle.js"
import "./Navbar.css";




function Navbar(){
  return(

// Style With Csss

    <header className="header">
        
        <div className="container">
            
            <div className="logo">
                <h2 className="logo-text">Logo</h2>
            </div>
            <nav className="navbar">
                <ul className="ul-list">
                    <li className="list-item"><Link to="/">Home</Link></li>
                    <li className="list-item"><a href="#">Work</a></li>
                    <li className="list-item"><a href="#">Portfolio</a></li>
                    <li className="list-item"><a href="#">Resume</a></li>
                    <li className="list-item"><a href="#">About</a></li>
                    <li className="list-item"><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>    
        </div>       
    </header>


// // Style With styled-component 
// {/* <NavbarSection>
        
//         <FlexItem className="container">  
//             <Logo>
//                <h2 className="logo-text">Logo</h2>
//              </Logo>
//             <NavbarLink>
//                 <UlList>
//                     <li><Link to="/">Home</Link></li>
//                     <li><ListItem href="#">Work</ListItem></li>
//                     <li><ListItem href="#">Portfolio</ListItem></li>
//                     <li><ListItem href="#">Resume</ListItem></li>
//                     <li><ListItem href="#">About</ListItem></li>
//                     <li><Link to="/contact">Contact</Link></li>
//                 </UlList>
//             </NavbarLink>    
//         </FlexItem>       
// </NavbarSection> */}

  )
}


export default Navbar;