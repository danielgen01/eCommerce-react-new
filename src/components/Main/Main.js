import React from 'react'
import './main.css';

const Main = ({isOpen,setIsOpen,toggleCart,cartItems,setCartItems}) => {


  const handleAddToCart = event =>{
    const button = event.target;
    const parentElement = button.parentElement;
    const productTitle = parentElement.children[0].innerHTML;
    const productImg = parentElement.children[1].src;
    const productPrice = parentElement.children[2].innerHTML;
    const productQuantity = parentElement.children[3].value;

    setCartItems(prevCartItems => [...prevCartItems, {
      title:productTitle,
      img:productImg,
      price:productPrice,
      quantity:productQuantity
    }])
    
    console.log(cartItems);
  }


  return (
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
        
        
        />

        <button className='addtocart-btn'
        onClick={handleAddToCart}
        >
        <i class='bx bx-cart-add' ></i>
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

        />

        <button className='addtocart-btn'
        onClick={handleAddToCart}
        >
        <i class='bx bx-cart-add' ></i>
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
        
        />

        <button className='addtocart-btn'
        onClick={handleAddToCart}
        >
        <i class='bx bx-cart-add'></i>
        </button>

    </div>
    
    </div>
  )
}

export default Main