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

            <div className='added-cart-items-column'>
              
              {cartItems.length > 0 && 
              <>
              {cartItems.map((item,title,price,quantity,img)=>(
                      <div key={item} 
                      style={{display:"flex",
                      flexDirection:"row",
                      justifyContent:"space-between",
                      width:"90%",
                      alignItems:"center"}}>          

                    <img src={item.img} style={{width:"5rem"}}/>
                    <h4>{item.title}</h4>
                    <h5>{item.quantity}</h5>
                    <h5>{item.price}</h5>
                 
                    </div>
                    
                  
              ))}
                 <hr/>
              </>
              }

            
              
              </div>

            </div>

        </div>
        
    </div>
  </>)
}

export default Cart