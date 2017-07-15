import React from 'react';

class Course extends React.Component{

  constructor(props,context){
    super(props,context);
    this.state = {
      course:{ title : null }
    };
  }
  render(){
    return(
     <div>
       <h1>Courses</h1>
       <h2>Add Course</h2>
     </div>
    );
  }
}

export default Course;
