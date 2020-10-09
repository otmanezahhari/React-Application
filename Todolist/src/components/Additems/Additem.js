import React, { Component } from "react";

class Additem extends Component {
state ={
  age:'',
  name : '',
  id:'',
}

handleChange = (event)=> {
  this.setState ({
    [event.target.id] : event.target.value
  })
}

handleSubmit = (event)=>{
  event.preventDefault();
  if(this.state.age && this.state.name ){
    this.props.addItem(this.state);
  this.setState({
    name:'',
    age:'',
  })
  }else if (this.state.name){
    this.state.age = 'Not Def'
    this.props.addItem(this.state);
  this.setState({
    name:'',
    age:'',
  })
  } 
}


render(){
  return(
    <div>
      <form onSubmit = {this.handleSubmit}>
        
        <input type="text" placeholder = "Enter Name..." id="name" onChange={this.handleChange} value={this.state.name} />
        <input type="number" placeholder = "Enter age..." id="age" onChange={this.handleChange} value={this.state.age} />
        <button type="submit" >Add</button>
      </form>
    </div>
  )
}
}

export default Additem;