import React from 'react'
import reactDom from 'react-dom'


/* function Greeting(){
  return <div>
      <h1>hello </h1>
    </div> ;
  
} */
 const Greeting=()=>{
   return React.createElement('h1',{},'hello');
 }
reactDom.render(<Greeting/>, document.getElementById('root'));