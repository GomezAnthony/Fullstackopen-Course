import React from "react";

const Total = ({total}) => {
   const sum = total.reduce((sum, e) => {
      return sum + e.exercises
   }, 0)
   return ( 
      <div>
         <p>total of {sum} exercises</p>
      </div>
    );
}
 
export default Total;