import React from 'react';
import '../styles/cards.css'

interface list {
  id: number;
  title: string;
  author: string;
  price: number;
  img: string;
  amount: number;
}

interface item {
   item:list
   handleClick: (item: list) => void;
}

const Cards:React.FC<item> = ({item,handleClick}) => {
  return (
    <div className='cards'>
        <div className='image_box'>
            <img src={item.img} alt='pic'/>
        </div>
        <div className='details'>
            <p>{item.title}</p>
            <p>{item.author}</p>
            <p>Price -{item.price}Rs</p>
            <button onClick={()=>handleClick(item)}>Add To Cart</button>
        </div>
    </div>
  )
}

export default Cards