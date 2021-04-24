import React from 'react'
import reactDom from 'react-dom'

import './index.css'
function Booklist(){
  return <div>
    <h1>Booklist</h1>
     <section className='booklist'>
      < Book/>
      < Book/>
      < Book/>
      < Book/>
      < Book/>
      < Book/>
      < Book/>
     </section>
    </div>
  
}
const author='by Paulo Coelho';
const Book=() =>{
  const title= 'The Alchemist, 25th Anniversary: A Fable About Following Your Dream';
  return <div className='book'>
    <img src='https://m.media-amazon.com/images/I/51kcX5PpaZL._AC_UY327_FMwebp_QL65_.jpg'></img> 
    <h3>{title}</h3>
    <h4>{author.toUpperCase()}</h4>
    </div>
}


reactDom.render(<Booklist/>, document.getElementById('root'));