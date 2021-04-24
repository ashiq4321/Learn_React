import React from 'react'
import reactDom from 'react-dom'

import './index.css'

//setup object
const firstBook={
  img: 'https://m.media-amazon.com/images/I/51kcX5PpaZL._AC_UY327_FMwebp_QL65_.jpg',
  title:'The Alchemist, 25th Anniversary: A Fable About Following Your Dream',
  author: 'by Paulo Coelho'
}

const secondBook={
  img: 'https://m.media-amazon.com/images/I/71yo6O-GhkL._AC_UL480_FMwebp_QL65_.jpg',
  title:'The Testaments: A Novel Kindle Edition',
  author: 'by Margaret Atwood'
}
function Booklist(){
  return <div>
    <h1>Booklist</h1>
     <section className='booklist'>
      < Book img={firstBook.img}
            title={firstBook.title}
            author={firstBook.author}
      >
        <p>Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. His quest will lead him to riches far different—and far more satisfying—than he ever imagined. Santiago's journey teaches us about the essential wisdom of listening to our hearts, of recognizing opportunity and learning to read the omens strewn along life's path, and, most importantly, to follow our dreams.</p>
      </Book>
      < Book img={secondBook.img}
            title={secondBook.title}
            author={secondBook.author}/>
     </section>
    </div>
  
}
const Book=({img, title, author, children}) =>{
  //const {img, title, author} =props;
  return <div className='book'>
    <img src={img}></img> 
    <h3>{title}</h3>
    <h4>{author}</h4>
    {children}
    </div>
}


reactDom.render(<Booklist/>, document.getElementById('root'));