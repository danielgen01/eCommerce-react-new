import React from 'react'

const Main = () => {
  return (
    <div className='shopping-products'
    style={{
        margin:"2%",
        display:"flex",
        justifyContent:"center",
        gap:"2%"}}>

            {/* PRODUCT 1 */}

    <div className='product col-s-3 col-3'
    style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        maxHeight:"35rem"
        }}
    >
        <h2>Fruit Tea</h2>
        <img src='https://h2omart.com.au/wp-content/uploads/2021/08/fruit-tea-freeze.png' 
        style={{
        maxWidth:"15rem",
        height:"10rem"}}
        />

        <h3>3.11€</h3>

        <input 
        type="number"
        placeholder="1"
        pattern="[1-9]"
        width="0.5rem"
        />

        <button 
        className='addtocart-btn'
        style={{
        height:"2rem",
        width:"5rem",
        marginTop:"1%"}}
        >Add</button>

    </div>

    {/* PRODUCT 2 */}

    <div className='product col-s-3 col-3'
    style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        maxHeight:"35rem"
        }}
    >
        <h2>Strawberries</h2>
        <img src='https://gwpriceltd.co.uk/wp-content/uploads/2020/04/strawberries-min.jpg' 
        style={{
        maxWidth:"15rem",
        height:"10rem"}}
        />

        <h3>3.11€</h3>

        <input 
        type="number"
        placeholder="1"
        pattern="[1-9]"
        width="0.5rem"
        />

        <button 
        className='addtocart-btn'
        style={{
        height:"2rem",
        width:"5rem",
        marginTop:"1%"}}
        >Add</button>

    </div>

    {/* PRODUCT 3 */}

    <div className='product col-s-3 col-3'
    style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        maxHeight:"35rem"
        }}
    >
        <h2>Coffee</h2>
        <img src='https://m.media-amazon.com/images/I/41Qfhit6s3L._AC_.jpg' 
        style={{
        maxWidth:"15rem",
        height:"10rem"}}
        />

        <h3>3.11€</h3>

        <input 
        type="number"
        placeholder="1"
        pattern="[1-9]"
        width="0.5rem"
        />

        <button 
        className='addtocart-btn'
        style={{
        height:"2rem",
        width:"5rem",
        marginTop:"1%"}}
        >Add</button>

    </div>
    
    </div>
  )
}

export default Main