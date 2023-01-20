import React, { useEffect, useState } from 'react'
import './header.css'

const Header = () => {
    const [headline,setHeadline] = useState('++ Order today - get your order tomorrow ++');

    const headlines = ['++ Order today - get your order tomorrow ++',
     '++ FREE SHIPPING ++',
    '++ NEW CLOTHES ++'];

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