import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Cart from './components/Cart/Cart';
// import each component here

function App() {
  return (
   <>
   <Header />
   <Navbar />
   <Main />
   <Cart />
   </>
  );
}

export default App;
