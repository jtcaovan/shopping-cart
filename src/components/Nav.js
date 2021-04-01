import React from "react";
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
        <nav className='flex sticky h-16 z-10 '> 
            <Link to='/'>
                <h1 className="m-auto pl-8 text-5xl">bloom</h1>
            </Link>

            <ul className='flex space-x-6 m-auto text-lg'>
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