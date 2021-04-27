import React from "react";
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
        <nav className='flex h-18 py-4 w-full m-auto text-white'> 
            <Link to='/'>
                <h1 className="transform duration-300 hover:-translate-y-1 font-display font-thin tracking-wide m-auto pl-12 text-5xl">bloom</h1>
            </Link>

            <ul className='flex justify-end items-end pr-24 w-full space-x-12 font-display font-light'>
                <Link to='/about'>
                    <li className='transition duration-300 transform hover:-translate-y-1 hover:text-red-500 hover:font-normal border-red-500 hover:border-b-2'>About</li>
                </Link>
                <Link to='/shop'>
                    <li className='transition duration-300 transform hover:-translate-y-1 hover:text-red-500 hover:font-normal border-red-500 hover:border-b-2'>Shop</li>
                </Link>
                {/* <Link to='/cart'> */}
                    <li className='transition duration-300 transform hover:-translate-y-1 hover:text-red-500 hover:font-normal border-red-500 hover:border-b-2'>Cart</li>
                {/* </Link> */}
            </ul>
        </nav>
  );
};

export default Nav;