import React,{ useState, useEffect } from "react";
import "./Portfolio.css";
import axios from "axios";

function Portfolio (){
//1. state={
//   images:[]
// }

  const [images , setImage] = useState([]); // Like 1

  useEffect(()=>{
    axios.get('/js/data.json').then(res => {setImage(res.data.portfolio)})
  },[])
  const PortfolioItem = images.map((imageItem)=>{
    
      return (
        <div key={imageItem.id}>
        <img src={imageItem.image} alt=""/>
        <p className="overlay">
            <span>
                Show Image
            </span>
        </p>
    </div>
      )
  })

    return(
        <section className="portfolio">
            <h2 className="portfolio-title"><span>My</span> Portfolio</h2>
            <ul className="portfolio-list">
                <li className="portfolio-item active">All</li>
                <li className="portfolio-item">HTML</li>
                <li className="portfolio-item">Photoshop</li>
                <li className="portfolio-item">Wordpress</li>
                <li className="portfolio-item">Mobile</li>
            </ul>
            
            <div className="box">
              {PortfolioItem}
                
                {/* <div>
                    <img src="images/Portfolio/portfolio-img1.jpg" alt=""/>
                    <p className="overlay">
                        <span>
                            Show Image
                        </span>
                    </p>
                </div>
                
                <div>
                    <img src="images/Portfolio/portfolio-img2.jpg" alt=""/>
                    <p className="overlay">
                        <span>
                            Show Image
                        </span>
                    </p>
                </div>
                
                <div>
                    <img src="images/Portfolio/portfolio-img3.jpg" alt=""/>
                    <p className="overlay">
                        <span>
                            Show Image
                        </span>
                    </p>
                </div>
                <div>
                    <img src="images/Portfolio/portfolio-img4.jpg" alt=""/>
                    <p className="overlay">
                        <span>
                            Show Image
                        </span>
                    </p>
                </div>
                
                <div>
                    <img src="images/Portfolio/portfolio-img5.jpg" alt=""/>
                    <p className="overlay">
                        <span>
                            Show Image
                        </span>
                    </p>
                </div>
                
                <div>
                    <img src="images/Portfolio/portfolio-img6.jpg" alt=""/>
                    <p className="overlay">
                        <span>
                            Show Image
                        </span>
                    </p>
                </div>
                
                <div>
                    <img src="images/Portfolio/portfolio-img7.jpg" alt=""/>
                    <p className="overlay">
                        <span>
                            Show Image
                        </span>
                    </p>
                </div>
                
                <div>
                    <img src="images/Portfolio/portfolio-img8.jpg" alt=""/>
                    <p className="overlay">
                        <span>
                            Show Image
                        </span>
                    </p>
                </div> */}
                
            </div>
            
        </section>
    )
 
}


export default Portfolio;