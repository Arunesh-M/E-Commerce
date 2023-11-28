import React,{useState,useEffect} from 'react';
import '../styles/cart.css'

interface carts {
  id: number;
  title: string;
  author: string;
  price: number;
  img: string;
  amount: number;
}

interface CartProps {
  cart: carts[];
  setCart: React.Dispatch<React.SetStateAction<carts[]>>;
  handleChange:(item:carts,d:number)=>void
}

const Cart:React.FC<CartProps> = ({cart,setCart,handleChange}) => {

  const [price,setPrice]=useState<number>(0)

  const handlePrice = ()=>{
    let ans = 0;
    cart.map((item)=>(
        ans += item.amount * item.price
    ))
    setPrice(ans);
  }

  const handleRemove = (id:number) =>{
    const arr = cart.filter((item)=>item.id !== id);
    setCart(arr);
    handlePrice();
  }

  useEffect(()=>{
    handlePrice();
  })
  
  return (
    <article>
       {
         cart?.map((item)=>(
            <div className="cart_box" key={item.id}>
                <div className="cart_img">
                    <img src={item.img} />
                    <p>{item.title}</p>
                </div>
                <div>
                    <button onClick={()=>handleChange(item,+1)}> + </button>
                    <button>{item.amount}</button>
                    <button onClick={()=>handleChange(item,-1)}> - </button>
                </div>
                <div>
                    <span>{item.price}</span>
                    <button onClick={()=>handleRemove(item.id)}>Remove</button>
                </div>
              </div>
            ))}
        {cart.length>0 
        ?  <div className='total'>
            <span>Total Price of your Cart</span>
            <span>Rs - {price}</span>
          </div> 
        : <p className='total'>No Items in your Cart</p>
        }   
    </article>
  )
}

export default Cart