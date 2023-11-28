import React from 'react'
import list from '../data/db'
import Cards from './cards'
import '../styles/display.css'

interface list {
  id: number;
  title: string;
  author: string;
  price: number;
  img: string;
  amount: number;
}

interface DisplayProps {
  handleClick: (item: list) => void;
  warning:boolean
}

const Display:React.FC<DisplayProps> = ({handleClick,warning}) => {
  return (
    <section>
        {list.map((item)=>(
            <Cards item={item} key={item.id} handleClick={handleClick}/>
        ))}
        {warning && <div className='warning'>Item is already added in your cart</div>}
    </section>
  )
}

export default Display