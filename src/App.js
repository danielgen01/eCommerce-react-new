import React,{useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Cart from './components/Cart/Cart';
// import each component here

function App() {

  // states
const [isOpen,setIsOpen] = useState(false);
const [cartItems,setCartItems] = useState([]);
const [total,setTotal] = useState(0);
const [cartCount,setCartCount] = useState(0);


const toggleCart = () =>{
  setIsOpen(!isOpen)
}


  return (
   <>
   <Header />
   
   <Navbar
    isOpen={isOpen}
    setIsOpen={setIsOpen}   
    toggleCart={toggleCart}
    cartCount={cartCount}
    setCartCount={setCartCount}
   />

   <Main
   isOpen={isOpen}
   setIsOpen={setIsOpen}   
   toggleCart={toggleCart}
   cartItems={cartItems}
   setCartItems={setCartItems}
   cartCount={cartCount}
   setCartCount={setCartCount}
   />

   <Cart 
   isOpen={isOpen}
   setIsOpen={setIsOpen}   
   toggleCart={toggleCart}
   cartItems={cartItems}
   setCartItems={setCartItems}
   total={total}
   setTotal={setTotal}
   cartCount={cartCount}
   setCartCount={setCartCount}
   
   />

   </>
  );
}

export default App;
