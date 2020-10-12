import React,{ useState, useEffect } from "react";
import "./Profile.css";
import axios from "axios";

function Profile(){


  const [skills , setSkills] = useState([]); // Like 1

  useEffect(()=>{
    axios.get('/js/data.json').then(res => {setSkills(res.data.skills)})
  },[])


  const Skillsitems = skills.map((skillItem)=>{
    
      return (
        <div className="bar" key={skillItem.id}>
                <span className="title">{skillItem.title}</span>
      <span className="perc">{skillItem.perc}</span>
                <div className="parent">
                    <span className="sp1"></span>
                </div>
        </div>
      )
  })
  return(
    <section className="profile_skills">
    <div className="container">
        <div className="profile">
            <h2 className="profile-title"><span>My </span>Profile</h2>
            <ul className="profile-list">
                <li className="profile-item">
                    <span>Full Name</span>
                    Otmane ZAHHARI
                </li>
                <li className="profile-item">
                    <span>Birthday</span>
                    23/07/1995
                </li>
                <li className="profile-item">
                    <span>Address</span>
                    Argenteuil
                </li>
                <li className="profile-item">
                    <span>Phone</span>
                    4444 5555 6666
                </li>
                <li className="profile-item">
                    <span>Email</span>
                    otmane@otmane.com
                </li>
                <li className="profile-item">
                    <span>Website</span>
                    <span className="web">www.google.com</span>
                </li>
            </ul>
        </div>
        
        <div className="skills">
            <h2 className="skills-title">Some <span>skills</span></h2>
            <p className="skills-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
            </p>
            {Skillsitems}
            {/* <div className="bar">
                <span className="title">Bootstrap</span>
                <span className="perc">100%</span>
                <div className="parent">
                    <span className="sp1"></span>
                </div>
            </div>
            
            <div className="bar">
                <span className="title">CSS3</span>
                <span className="perc">90%</span>
                <div className="parent">
                    <span className="sp2"></span>
                </div>
            </div>
            <div className="bar">
                <span className="title">Photoshop</span>
                <span className="perc">80%</span>
                <div className="parent">
                    <span className="sp3"></span>
                </div>
            </div> */}
        </div>     
    </div>
</section>
  )
}


export default Profile;