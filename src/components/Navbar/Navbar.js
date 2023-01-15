import React,{useState} from 'react'
import './navbar.css';


const Navbar = ({isOpen,setIsOpen,toggleCart}) => {



  return (
    <div className='navbar'>
        <a href='index.html'>
        <img src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fruit-logo-design-template-80e6d069757f94e82d8f8003edd6238b_screen.jpg?ts=1614334276'
            id='logo'
        />
        </a>
        <div style={{display:"flex"}}>
        <i class='bx bx-shopping-bag'
         id='cart-icon'
         onClick={toggleCart}
         ></i>
        <h3 id='items-count'>0</h3>
        </div>
    </div>
  )
}

export default Navbar