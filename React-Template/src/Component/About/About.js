import React from "react";
import "./About.css";


function About(){
  return(
    <section className="creative">
            <div className="container">
                <div className="creative-info">
                    <h2 className="info-title"><span>This is</span> Me</h2>
                    <h3 className="info-dir">Creative Director</h3>
                    <p className="info-desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <a href="#">explicabo</a> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </p>
                    <p className="info-desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </p>
                </div>
            </div>
    </section>
  )
}


export default About;