import React, { Component } from "react";
import axios from "axios";
import "./Work.css";

class Work extends Component{
  state={
    works:[]
  };
componentDidMount(){
    axios.get('/js/data.json').then(res => {this.setState({
      works: res.data.works,
    })})
  }


  render(){
    const {works} = this.state;
    const WorkList = works.map((workItem)=>{
      return(
        <div className="part" key ={workItem.id}>
                <i className={workItem.icon_name}></i>
                <h4 className="part-title">{workItem.title}</h4>
                <hr className="line"/>
                <p className="part-desc">
                    {workItem.body}
                </p>
        </div>
      )
    })
    return(
      <section className="work">
        {/* Update With Json File */}
        <div className="container">
        <h2 className="work-title"><span>My</span> Work</h2>
        <div className="ContentWork">
              {WorkList}
        </div>
        
            {/* <h2 className="work-title"><span>My</span> Work</h2>
            <div className="part first">
                <i className="icon fa fa-chain fa-2x"></i>
                <h4 className="part-title">Mobile Ux</h4>
                <hr className="line"/>
                <p className="part-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.
                </p>
            </div>
            
            <div className="part">
                <i className="icon fa fa-bolt fa-2x"></i>
                <h4 className="part-title">Mobile Ux</h4>
                <hr className="line"/>
                <p className="part-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.
                </p>
            </div>
            
            <div className="part last">
                <i className="icon fa fa-tachometer fa-2x"></i>
                <h4 className="part-title">Mobile Ux</h4>
                <hr className="line"/>
                <p className="part-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.
                </p>
            </div> */}
            
        </div>
      </section>
      )
  }
  
}


export default Work;