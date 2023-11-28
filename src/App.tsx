import {useState} from "react";
import Navbar from "./components/navbar"
import Display from "./components/display";
import Cart from "./components/cart";

interface carts {
  id: number;
  title: string;
  author: string;
  price: number;
  img: string;
  amount: number;
}

const App=()=> {
  
  const [show, setShow] = useState<boolean>(true);
	const [cart , setCart] = useState<carts[]>([]);
  const [warning,setWarning]=useState<boolean>(false)

  const handleClick=(item:carts): void=>{
    let isPresent=false;
    cart.forEach((product)=>{
      if(item.id===product.id){
        isPresent=true
      }
    })

    if(isPresent){
      setWarning(true)
      setTimeout(()=>{
        setWarning(false)
      },2000)
      return
    }
    setCart([...cart,item])
  }

  const handleChange=(item:carts,d:number)=>{
    let ind=-1;
    cart.forEach((data,index)=>{
      if(data.id===item.id){
        ind=index
      }
    })
    const tempArr = cart;
		tempArr[ind].amount += d;
		
		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setCart([...tempArr])
  }

  return (
    <>
      <Navbar size={cart.length} setShow={setShow}/>
      {show 
      ? <Display handleClick={handleClick} warning={warning}/>
      : <Cart cart={cart} setCart={setCart} handleChange={handleChange}/>  
      }
      
    </>
  )
}

export default App
