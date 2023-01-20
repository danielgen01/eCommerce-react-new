import React from 'react'
import './main.css';

const Main = (
  {isOpen,
  setIsOpen,
  toggleCart,
  cartItems,
  setCartItems,
  cartCount,
  setCartCount}
  
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
  
}

  }
  return (
    // Main content webpage items
    <div className='shopping-products'>
  

            {/* PRODUCT 1 */}

    <div className='product col-s-3 col-3'>
        
        <img src='https://i.otto.de/i/otto/121801b0-17a9-5ba4-afd5-98087775d6c2/adidas-sportswear-sporthose-essentials-fleece-logo-hose-black-white.jpg?$formatz$' 
        className="product-img"
        
        />
        <h2>Adidas Jogger</h2>
        <h3>29.99€</h3>

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
         <i className={`bx bx-cart-add cart-add-icon`}
         style={{pointerEvents:"none"}}
         ></i>
        </button>


    </div>

    {/* PRODUCT 2 */}

    <div className='product col-s-3 col-3'>
        
        <img src='https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/36ed7aebf87e475aba21add7006c7c89_9366/Condivo_22_Hose_Schwarz_HA3694_21_model.jpg' 
        className="product-img"
        
        />
        <h2>Adidas Jogger classic </h2>
        <h3>29.99€</h3>

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
         <i className={`bx bx-cart-add cart-add-icon`}
         style={{pointerEvents:"none"}}
         ></i>
        </button>


    </div>

    {/* PRODUCT 3 */}

    <div className='product col-s-3 col-3'>
        
        <img src='https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/557ce1f14da44b268adbadbe00d06f9c_9366/Entrada_22_Trainingshose_Schwarz_HC0332_21_model.jpg' 
        className="product-img"
        
        />
        <h2>Adidas Jogger</h2>
        <h3>29.99€</h3>

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
         <i className={`bx bx-cart-add cart-add-icon`}
         style={{pointerEvents:"none"}}
         ></i>
        </button>


    </div>

       {/* PRODUCT 4 */}

       <div className='product col-s-3 col-3'>
        
        <img src='https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2147438006aa42eba34bae8401209c32_9366/Essentials_Camo_Print_French_Terry_Hoodie_Schwarz_HL6933_21_model.jpg' 
        className="product-img"
        
        />
        <h2>Adidas Hoodie black</h2>
        <h3>59.99€</h3>

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
         <i className={`bx bx-cart-add cart-add-icon`}
         style={{pointerEvents:"none"}}
         ></i>
        </button>


    </div>

       {/* PRODUCT 5 */}

       <div className='product col-s-3 col-3'>
        
        <img src='https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/63cb7b51fac146c28306aefb011cccf7_9366/adicolor_Classics_3-Streifen_Hoodie_Blau_IA6348_21_model.jpg' 
        className="product-img"
        
        />
        <h2>Adidas Hoodie blue</h2>
        <h3>59.99€</h3>

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
         <i className={`bx bx-cart-add cart-add-icon`}
         style={{pointerEvents:"none"}}
         ></i>
        </button>


    </div>

       {/* PRODUCT 6 */}

       <div className='product col-s-3 col-3'>
        
        <img src='https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/42558fffae324a73afc3ae9800aff124_9366/Essentials_Camo_Print_French_Terry_Hoodie_Weiss_HL6932_21_model.jpg' 
        className="product-img"
        
        />
        <h2>Adidas Hoodie white</h2>
        <h3>59.99€</h3>

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
         <i className={`bx bx-cart-add cart-add-icon`}
         style={{pointerEvents:"none"}}
         ></i>
        </button>


    </div>
    
    </div>
  )
}

export default Main