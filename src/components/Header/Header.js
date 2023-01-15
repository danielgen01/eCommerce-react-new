import React, { useEffect, useState } from 'react'
import './header.css'

const Header = () => {
    const [headline,setHeadline] = useState('++ ONLY TODAY SPECIAL OFFERS ! ++');

    const headlines = ['++ STRAWBERRIES | BUY 3 - GET 10% OFF ++',
     '++ FRUIT TEA | BUY ONE GET ONE FREE ++',
    '++ ONLY TODAY SPECIAL OFFERS ! ++'];

    useEffect(()=> {
    let timeoutId;
    const newHeadline = () => {

    let randoNum = Math.floor(Math.random() * headlines.length);
    let randomHeadline = headlines[randoNum];
    setHeadline(randomHeadline)
    timeoutId = setTimeout(newHeadline,5000)
    }

    newHeadline();
     

    
    },[]);

    
    return (
    <div className='Header'>
        <h1> {headline}</h1>

    </div>
  )
}

export default Header