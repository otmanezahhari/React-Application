import React from 'react';

function CoursesForm(props){
  


  return(
    <form onSubmit = {props.addCourse}>
      <input type="text" onChange={props.updateCourse} value={props.value} />
      <button type="submit">Add Course</button>
    </form>
  )
}

export default CoursesForm;