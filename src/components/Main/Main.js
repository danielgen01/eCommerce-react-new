import React, { useState } from 'react'
import './main.css';

const Main = (
  
  {isOpen,
  setIsOpen,
  toggleCart,
  cartItems,
  setCartItems,
  cartCount,
  setCartCount,
  isAdded,
  setIsAdded,
  toggleAddedItemCtn}
  
  ) => {


  const handleAddToCart = event =>{
    const button = event.target;
    const parentElement = button.parentElement;
    const productImg = parentElement.children[0].src;
    const productTitle = parentElement.children[1].innerHTML;
    const productPrice = parseFloat(parentElement.children[2].innerHTML);
    const productQuantity = parseFloat(parentElement.children[3].value);

    if(productQuantity <1){
      return
    }else {

    const existingItem = cartItems.find(item => item.title === productTitle);

    // Checks if clicked item already in cart and react to it 

    if(existingItem){
      existingItem.quantity+= 1 * productQuantity;
      setCartItems(prevCartItems => [...prevCartItems]);
    }else{

    setCartItems(prevCartItems => [...prevCartItems, {
      img:productImg,
      title:productTitle,
      price:productPrice,
      quantity:productQuantity
    }])
  }
  
  setCartCount(prevCount => prevCount +=1 * productQuantity);
  setIsAdded(true);
  
}



  }
  return (
    <>
    {/* Popup when user adds item to cart */}
    <div className='added-to-cart-background' style={{display: isAdded? "flex" : "none"}}>
    <div className='added-to-cart-ctn' style={{display: isAdded? "flex" : "none",flexDirection:"column",alignItems:"center"}}>
    <i class='bx bx-window-close' 
    id='close-item-added-preview-icon'
    onClick= {toggleAddedItemCtn}
    ></i>
    <h5><i class='bx bxs-check-circle' id='check-circle'></i>Added to your cart</h5>
      
      {cartItems.map((itemPreviv) => (

        <div key={itemPreviv} style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
          <h2>{itemPreviv.title}</h2>
            <img src={itemPreviv.img} style={{width:"15rem"}} />
            <h2>Quantity: {itemPreviv.quantity}</h2>
            <h2>Price: {itemPreviv.price} € / item</h2>
            </div>
          
          
      ))}     
      </div> 
      </div>
    
    
    {/* Main content webpage items */}
    <div className='shopping-products'>
  

            {/* PRODUCT 1 */}

    <div className='product col-s-3 col-3'>
        
        <img src='https://h2omart.com.au/wp-content/uploads/2021/08/fruit-tea-freeze.png' 
        className="product-img"
        
        />
        <h2>Fruit Tea</h2>
        <h3>3.11€</h3>

        <input 
        type="number"
        placeholder="1"
        pattern="[1-9]"
        className='input-field'
        defaultValue="1"
        min="1"
        max="9"
        
        
        />

        <button className='addtocart-btn'
        onClick={handleAddToCart}
        >
         <i class='bx bx-cart-add'
         style={{pointerEvents:"none"}}
         ></i>
        </button>


    </div>

    {/* PRODUCT 2 */}

    <div className='product col-s-3 col-3'>
        
        <img src='https://gwpriceltd.co.uk/wp-content/uploads/2020/04/strawberries-min.jpg' 
       className='product-img'
        />
        <h2>Strawberries</h2>

        <h3>5.00€</h3>

        <input 
        type="number"
        placeholder="1"
        pattern="[1-9]"
        defaultValue="1"
        className='input-field'
        min="1"
        max="9"

        />

        <button className='addtocart-btn'
        onClick={handleAddToCart}
        >
         <i class='bx bx-cart-add'
         style={{pointerEvents:"none"}}
         ></i>
        </button>

    </div>

    {/* PRODUCT 3 */}

    <div className='product col-s-3 col-3'>
     
        <img src='https://m.media-amazon.com/images/I/41Qfhit6s3L._AC_.jpg' 
        className='product-img'
        />
        <h2>Coffee</h2>
        <h3>11.23€</h3>

        <input 
        type="number"
        placeholder="1"
        pattern="[1-9]"
        className='input-field'
        defaultValue="1"
        min="1"
        max="9"
       
        
        
        
        />

        <button className='addtocart-btn'
        onClick={handleAddToCart}
        >
         <i class='bx bx-cart-add'
         style={{pointerEvents:"none"}}
         ></i>
        </button>

    </div>
    
    </div>
  </>)
}

export default Main