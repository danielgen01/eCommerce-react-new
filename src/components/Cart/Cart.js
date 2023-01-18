import { eventWrapper } from '@testing-library/user-event/dist/utils'
import React,{useEffect,useState} from 'react'
import './cart.css'


const Cart = (
  {isOpen,
  setIsOpen,
  toggleCart,
  cartItems,
  setCartItems,
  total,
  setTotal,
  cartCount,
  setCartCount,
   isAdded,
   setIsAdded}
  
  ) => {
// calculate/update total price

useEffect(() => {
  const calculateTotalCost = (cartItems) => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.price * item.quantity
    });
    return total.toFixed(2);
  }
  
   
  setTotal(calculateTotalCost(cartItems))
},[cartItems])

//handle opened cart buttons 

const handleRemoveFromCart = index =>{
    const updatedCart = cartItems.filter((item,i) => i!== index);
    setCartItems(updatedCart);
    setCartCount(prevCount => prevCount -=1);

    }

    const handleMinusButtonClick = item =>{
       item.quantity -=1;
       setCartItems(prevCartItems => [...prevCartItems]);
       setCartCount(prevCount => prevCount -=1);
    }

    const handlePlusButtonClick = item =>{
      item.quantity +=1;
      setCartItems(prevCartItems => [...prevCartItems]);
      setCartCount(prevCount => prevCount +=1);
   }

   
  



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

              {/* Rendering cart content  */}

              <h1 style={{textAlign:"center"}}>{cartCount} items | {total} €</h1>

              {cartItems.length <= 0 &&
              <>
              <div className='empty-cart-content'>
              <i class='bx bx-cart' id='empty-cart-icon'></i>
              <h2>No items in cart</h2>
              <button className='continue-shopping-btn' 
                onClick={toggleCart}
              >CONTINUE SHOPPING</button>
              </div>
              </>}
              
              {cartItems.length > 0 && 
              <>
              {cartItems.map((item,index)=>(
                   
                      <div key={item} className="added-cart-item-row">      
                      

                    <img src={item.img} style={{width:"5rem"}}/>

                    <div>
                    <h4>{item.title}</h4>

                    <div className='input-row'>
                      
                      {item.quantity <=1  &&

                                 
                      <i class='bx bx-trash-alt' id='in-cart-input-trash-icon'
                      onClick={() => handleRemoveFromCart(index)}>
                       </i>
                   
                      
                     }
                     

                      {item.quantity > 1  &&
                    <i class='bx bx-minus' id='in-cart-input-minus-icon'
                        onClick={() => handleMinusButtonClick(item)}
                    ></i>  }
                    

                    <input type="number"
                     value={item.quantity}
                     readOnly={true}
                     className="cart-input">
                      
                    </input>
                    <i class='bx bx-plus' id='in-cart-input-plus-icon'
                        onClick={() => handlePlusButtonClick(item)}
                    ></i>

                        </div>
                      </div>
                      
                      
                    <div>
                   

                    {/* PRICING RULES  */}

                    {/* First Rule Strawberries */}

                    {item.title === 'Strawberries' && item.quantity >=3 &&
                    <>
                    <s>5.00€</s>
                    <h5 id='strawberry-discount'>10% off</h5> 
                    <h5>{item.price = 4.50}€</h5>
                      
                      </>
                    }

                    {item.title === 'Strawberries' && item.quantity < 3 &&
                   <>
                    <h5>{item.price = 5.00}€</h5>
                     </>
                        }

                        {/* Second Rule Fruit Tea */}
                        {item.title === 'Fruit Tea' && item.quantity >=1 &&
                        <>
                         <s>3.11€</s>
                        <h5 id='fruit-tea-discount'>50% off</h5>
                        <h5>{item.price = 1.55}€</h5>
                        </>
                        }

                        {item.title === 'Coffee' &&
                        <>
                        <h5>{item.price}€</h5>
                        </>}

                        

                    <h5>{(item.price * item.quantity).toFixed(2)}€</h5> {/* Multi Item price (quantity * single price)*/ }
                        </div>
                 
                    </div>
                    
                  
              ))}   {/* End of .map Method*/}
                 <hr/>
              </>
              }

            
              
              </div>
              {cartItems.length > 0 &&
                  <div className='total-ctn'>

              <h3 id='total-price'>Total</h3>
              <h3>{total}€</h3>
              </div>
              }
            </div>
              
        </div>
       
    </div>
  </>)
}

export default Cart