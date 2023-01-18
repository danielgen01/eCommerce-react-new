import React,{useState} from 'react'
import './navbar.css';


const Navbar = (
  
  {isOpen,
  setIsOpen,
  toggleCart,
  cartCount,
  setCartCount}

 ) => {



  return (
    <>
    <div className='navbar'>
        <a href='index.html'>
        <img src='https://thumbs.dreamstime.com/z/blue-pattern-background-d-animation-179992402.jpg'
            id='logo'
        />
        </a>
        <div style={{display:"flex"}}>
        <i class='bx bx-shopping-bag'
         id='cart-icon'
         onClick={toggleCart}
         ></i>
        <h3 id='items-count'>{cartCount}</h3>
        </div>
        
    </div>
    <hr></hr>
  </>)
}

export default Navbar