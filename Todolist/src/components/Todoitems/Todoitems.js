import React from "react";

const Todoitems = (props) => {
  const {items,deleteItem }= props;
  let length = items.length;
  if(length > 0){
    return(
      <div>
        <div className="ListItems">
          <span className="name title">Name</span>
          <span className ="age title">Age</span>
          <span className="action title">Action</span>
        </div>
        {items.map((item)=> {
          return(
            <div className="ListItems" key ={item.id}>
              <span className="name">{item.name}</span>
              <span className="age">{item.age}</span>
              <span className="action icon" onClick ={()=> deleteItem(item.id)} >&times;</span>
            </div>)})}
      </div> )
  }else{
    return (
      <div>
        <div className="ListItems">
          <span className="name title">Name</span>
          <span className ="age title">Age</span>
          <span className="action title">Action</span>
        </div>
        <div className="ListItems" >
          <p>There is no Item to Show</p>
        </div>
      </div>
    )
  }
  
}

export default Todoitems;