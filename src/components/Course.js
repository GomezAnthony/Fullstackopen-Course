import React from "react";
import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

const Course = ({course}) => {

 
   
   return ( 
      <div>
         <Header label={course.name}/>
         <Content course={course}/>
         <Total total={course.parts} />
      </div>
    );
}
 
export default Course;