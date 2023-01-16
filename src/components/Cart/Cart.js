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

            <div className='cart-items-column'>
              
              {cartItems.length > 0 && 
              <>
              {cartItems.map((item,title,price,quantity,img)=>(
                   
                      <div key={item} className="added-cart-item-row">      
                      

                    <img src={item.img} style={{width:"5rem"}}/>

                    <div>
                    <h4>{item.title}</h4>

                    <div className='input-row'>
                    <i class='bx bx-trash-alt' id='in-cart-input-trash-icon'></i>
                    <input type="number"
                     defaultValue={item.quantity}
                     readOnly="true"
                     className="cart-input">
                      
                    </input>
                    <i class='bx bx-plus' id='in-cart-input-plus-icon'></i>

                        </div>
                      </div>
                      

                    <div>
                    <h6>{item.price}</h6>
                    <h5>{(item.price * item.quantity).toFixed(2)}</h5>
                        </div>
                 
                    </div>
                    
                  
              ))}
                 <hr/>
              </>
              }

            
              
              </div>
                  <div className='total-ctn'>

              <h3 id='total-price'>Total</h3>
              <h3>€</h3>
              </div>

            </div>
              
        </div>
       
    </div>
  </>)
}

export default Cart