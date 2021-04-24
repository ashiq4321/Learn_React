import React from 'react'
import reactDom from 'react-dom'


function Booklist(){
  return <div>
    <h1>Booklist</h1>
     < Book/>
     < Book/>
     < Book/>
     < Book/>
     < Book/>
     < Book/>
     < Book/>
     < Book/>
     < Book/>
     < Book/>
     < Book/>
     < Book/>
     < Book/>
     < Book/>
    </div>
  
}

const Book=() =>{
  return <div>
    <Image/> 
    <Title />
    by <Author />
    </div>
}

const Image=()=>{
return <img src='https://m.media-amazon.com/images/I/51kcX5PpaZL._AC_UY327_FMwebp_QL65_.jpg'></img>
}

const Title=()=>{
return <h3>The Alchemist, 25th Anniversary: A Fable About Following Your Dream</h3>
}

const Author=()=>{
return <h4> Paulo Coelho</h4>
}
reactDom.render(<Booklist/>, document.getElementById('root'));