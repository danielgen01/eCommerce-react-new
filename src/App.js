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
   />

   <Main
   isOpen={isOpen}
   setIsOpen={setIsOpen}   
   toggleCart={toggleCart}
   cartItems={cartItems}
   setCartItems={setCartItems}
   />

   <Cart 
   isOpen={isOpen}
   setIsOpen={setIsOpen}   
   toggleCart={toggleCart}
   cartItems={cartItems}
   setCartItems={setCartItems}
   
   />

   </>
  );
}

export default App;
