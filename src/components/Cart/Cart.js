import React from 'react'
import './cart.css'


const Cart = ({isOpen,setIsOpen,toggleCart}) => {

  return (
    <div className='cart-background' 
    style={{display: isOpen? "flex" : "none"}}>
      
        
        <div className='cart-content'
        style={{display: isOpen? "flex" : "none"}}>

          <i class='bx bx-window-close'
          id='cart-close-btn'
          onClick={toggleCart}
          ></i>
         
        
        


        </div>
        
    </div>
  )
}

export default Cart