import React,{ useState, useEffect } from "react";
import axios from "axios";
import "./Social.css";

function Social(){

  const [socialMedia , setSocial] = useState([]); // Like 1

  useEffect(()=>{
    axios.get('/js/data.json').then(res => {setSocial(res.data.social)})
  },[])


  const SocialItems = socialMedia.map((SocialItem)=>{
    
      return (
        <div className={SocialItem.body} key={SocialItem.id}>
                <i className={SocialItem.icon}></i>
                <p>
                    <span className="info1">{SocialItem.title}</span>
                    <span className="info2">{SocialItem.body}</span>
                </p>
            </div>
      )
  })
  return(
    <div className="social-media">
            {SocialItems}
            {/* <div className="social facebook">
                <i className="icon fa fa-facebook fa-lg"></i>
                <p>
                    <span className="info1">Follow Me on</span>
                    <span className="info2">Social facebook</span>
                </p>
            </div>
            
            <div className="social twitter">
                <i className="icon fa fa-twitter fa-lg"></i>
                <p>
                    <span className="info1">Tweet Me on</span>
                    <span className="info2">Social twitter</span>
                </p>
            </div>
            
            <div className="social pinterest">
                <i className="icon fa fa-pinterest fa-lg"></i>
                <p>
                    <span className="info1">Pin Me on</span>
                    <span className="info2">Social Pinterest</span>
                </p>
            </div> */}
        </div>
  )
}


export default Social;