import React from 'react'
import '../styles/navbar.css'

interface cart {
    size:number
    setShow: (show: boolean) => void;
}

const Navbar:React.FC<cart> = ({size,setShow}) => {
  return (
    <nav>
        <div className="nav_box">
            <span className='my_shop' onClick={()=>setShow(true)}>
                My Shopping
            </span>
            <div className="cart" onClick={()=>setShow(false)}>
                <span>
                    <i className="fas fa-cart-plus"></i>
                </span>
                <span>{size}</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar