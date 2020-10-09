import React, { Component } from 'react';
import CoursesForm from "./Components/CourseForm/CoursesForm";
import CourseList from "./Components/CourseList/CourseList";

class App extends Component {
  state ={
    courses:[
      {name : "HTML"},
    {name : "Css"},
    {name : "Jquery"},
    ],
    current :'',
  }
 /// Update Course
 updateCourse = (event) => {
   this.setState({current:event.target.value});
 }

 // Add Course
 addCourse = (event) =>{
  event.preventDefault();
  let current = this.state.current;
  let courses = this.state.courses;
  if(current.trim()){
    courses.push({name:current});
  this.setState({courses,current:''});
  }
 }  

 //DeleteCourse

 deleteCourse = (index) => {
  let courses =this.state.courses;
  courses.splice(index,1)
  this.setState({courses});
 }

 //Edit Course

 editeCourse = (index,value)=>{
  let courses =this.state.courses;
  let course = courses[index];
  if(value.trim()){
    course['name'] = value;
    this.setState({courses});
  }
 }
  
  render(){
    return (
      <div className="App">
        <h2>Hello from React</h2>
        <CoursesForm value={this.state.current}  addCourse = {this.addCourse}  updateCourse = {this.updateCourse}/>
        <ul>
          {this.state.courses.map((item,index)=>{
            return <CourseList editeCourse={this.editeCourse} deleteCourse={this.deleteCourse} key={index} index={index} cooursesinfo = {item} />
          })}
        </ul>
      </div>
    );
  }
  
}

export default App;
