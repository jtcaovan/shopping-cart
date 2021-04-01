import React from "react";
import './index.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
        <nav className='flex'> 
                <Link to='/'>
                    <h1>Logo</h1>
                </Link>

            <ul className='flex space-x-6 m-auto'>
                <Link to='/about'>
                    <li>About</li>
                </Link>
                <Link to='/shop'>
                    <li>Shop</li>
                </Link>
                <Link to='/cart'>
                    <li>Cart</li>
                </Link>
            </ul>
        </nav>
  );
};

export default Nav;