import { eventWrapper } from '@testing-library/user-event/dist/utils'
import React from 'react'
import './cart.css'


const Cart = ({isOpen,setIsOpen,toggleCart,cartItems,setCartItems}) => {

  
  return (
    <>
    <div className='cart-background' 
    style={{display: isOpen? "flex" : "none"}}>
      
        
        <div className='cart-container'
        style={{display: isOpen? "flex" : "none"}}>

          <i class='bx bx-window-close'
          id='cart-close-btn'
          onClick={toggleCart}
          ></i>

         <div className='cart-content'>

            <div className='added-cart-item-row'>
              
              {cartItems.length > 0 && 
              <>
              {cartItems.map((item,title,price,quantity,img)=>(
                  <div key={title}>
                    <h4>{item.title}</h4>
                  </div>
              ))}
              
              </>
              }

            
              
              </div>

            </div>

        </div>
        
    </div>
  </>)
}

export default Cart