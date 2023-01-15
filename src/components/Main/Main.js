import React from 'react'
import './main.css';

const Main = () => {
  return (
    <div className='shopping-products'>
  

            {/* PRODUCT 1 */}

    <div className='product col-s-3 col-3'>
        <h2>Fruit Tea</h2>
        <img src='https://h2omart.com.au/wp-content/uploads/2021/08/fruit-tea-freeze.png' 
        className="product-img"
        
        />

        <h3>3.11€</h3>

        <input 
        type="number"
        placeholder="1"
        pattern="[1-9]"
        width="0.5rem"
        
        />

        <button className='addtocart-btn'>Add</button>

    </div>

    {/* PRODUCT 2 */}

    <div className='product col-s-3 col-3'>
        <h2>Strawberries</h2>
        <img src='https://gwpriceltd.co.uk/wp-content/uploads/2020/04/strawberries-min.jpg' 
       className='product-img'
        />

        <h3>5.00€</h3>

        <input 
        type="number"
        placeholder="1"
        pattern="[1-9]"
        width="0.5rem"
     
        />

        <button className='addtocart-btn'>Add</button>

    </div>

    {/* PRODUCT 3 */}

    <div className='product col-s-3 col-3'>
        <h2>Coffee</h2>
        <img src='https://m.media-amazon.com/images/I/41Qfhit6s3L._AC_.jpg' 
        className='product-img'
        />

        <h3>11.23€</h3>

        <input 
        type="number"
        placeholder="1"
        pattern="[1-9]"
        width="0.5rem"
        
        />

        <button className='addtocart-btn'>Add</button>

    </div>
    
    </div>
  )
}

export default Main