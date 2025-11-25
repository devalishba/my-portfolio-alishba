import React from 'react'
import "./card.css"

function books() {
  
    let bookData=[
       {
        bookImage:'https://m.media-amazon.com/images/I/81a1UWnv2bL._AC_UL480_FMwebp_QL65_.jpg',
        bookDesc:'The thing about books,’ she said ‘is that they help you to imagine a life bigger and better than you could ever dream of.',
        bookAuthor:' Evie Woods',
        bookPrice:'$12'
    },
{
        bookImage:'https://m.media-amazon.com/images/I/91Cioyg8WPL._AC_UL480_FMwebp_QL65_.jpg',
        bookDesc:'The thing about books,’ she said ‘is that they help you to imagine a life bigger and better than you could ever dream of.',
        bookAuthor:' Evie Woods',
        bookPrice:'$12'
    },
   {
        bookImage:'https://m.media-amazon.com/images/I/914zwN4sVvL._AC_UL480_FMwebp_QL65_.jpg',
        bookDesc:'The thing about books,’ she said ‘is that they help you to imagine a life bigger and better than you could ever dream of.',
        bookAuthor:' Evie Woods',
        bookPrice:'$12'
    },
   {
        bookImage:'https://m.media-amazon.com/images/I/91U+qxK098L._AC_UL480_FMwebp_QL65_.jpg',
        bookDesc:'The thing about books,’ she said ‘is that they help you to imagine a life bigger and better than you could ever dream of.',
        bookAuthor:' Evie Woods',
        bookPrice:'$12'
    }
    ]
 
  return (
    <div>
      <h1>Book Store</h1>
      <div className="cards">
{
 bookData.map((meribook)=>{
return <Book {...meribook}/>
})   }
    </div>
      </div>
  )
}

export default books
function Book(props) {
  console.log(props);
  
  
  
      return  <div className='card'>
        <img src={props.bookImage} alt="" />
        <h5>{props.bookDesc}</h5>
        <p> {props.bookAuthor}</p>
      
    </div>
}
