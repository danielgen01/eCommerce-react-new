import React from 'react'
import './cart.css'


const Cart = ({isOpen,setIsOpen}) => {

  return (
    <div className='cart-background' 
    style={{display: isOpen? "flex" : "none"}}>
        
        <div className='cart-content'>


        </div>

    </div>
  )
}

export default Cart