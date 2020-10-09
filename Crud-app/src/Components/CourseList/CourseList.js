import React,{Component, Fragment} from "react";


class CourseList extends Component{
state = {
  isEdit : false,
}


//Render course item 
Courseitem = ()=>{
  return(
    <li>
      <span>{this.props.cooursesinfo.name}</span>
      <button onClick ={()=>this.Togglestate()}>Edit Course</button>
      <button onClick={()=>this.props.deleteCourse(this.props.index)}>Delete Course</button>  
    </li>
  )
}
//Update course item

Updatecourseitem=(event)=>{
  event.preventDefault();
  this.props.editeCourse(this.props.index,this.input.value);
  this.Togglestate();
}

//render Update Form

UpdateForm = ()=>{
  return(
    <form onSubmit={this.Updatecourseitem}>
      <input ref={(v)=>{this.input=v}}  defaultValue={this.props.cooursesinfo.name} type ="text"/>
      <button  >Update Course</button>
    </form>
  )
}

//Render togle State
Togglestate = ()=>{
  let {isEdit} = this.state;
  this.setState({
    isEdit : !isEdit,
  })
}

  render(){
    let {isEdit} = this.state;
    return(
      <Fragment>
        {isEdit?this.UpdateForm():this.Courseitem() }
      </Fragment>
    )
  }
}

export default CourseList;