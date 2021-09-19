import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import sneakers from './sneakers.png';

export const NavBar = () => {
  const [onScroll, setOnScroll] = useState(false);

  const handleNavbarOnScroll = () => {
    if (window.scrollY >= 100) {
      setOnScroll(true);
    } else {
      setOnScroll(false);
    }
  };

  window.addEventListener('scroll', handleNavbarOnScroll);

  return (
    <nav className={onScroll ? 'navbar active' : 'navbar'}>
      <img src={sneakers} alt='' />
      <div className='navbar-right'>
        <Link to='/'>Home</Link>
        <Link to='ShoeItem'>Colletion</Link>
        <Link to='CheckOut'>
          <span className='material-icons'>shopping_cart</span>
        </Link>
      </div>
    </nav>
  );
};
