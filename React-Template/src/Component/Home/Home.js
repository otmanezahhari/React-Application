import React from "react";
import "./Home.css";

function Home(){
  return(
        <section className="home">
            <div className="container">
                <div className="home-information">
                    <h1 className="home-title">Otmane ZAHHARI</h1>
                    <h2 className="home-info">Creative Director</h2>
                    <p className="home-desc">
                        Iam a professional <span>UX Designer</span> and <span>Full Stack Developer</span> creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </p>
                    <button className="home-btn">Let's Begin</button>
                </div>
            </div>
        </section>
  )
}


export default Home;