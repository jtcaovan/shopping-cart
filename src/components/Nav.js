import React from "react";
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
        <nav className='flex h-16 w-full text-white hover:bg-white hover:text-black'> 
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