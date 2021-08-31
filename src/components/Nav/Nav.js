import React from "react";
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { displayCart } from '../Cart/cartSlice'

const Nav = () => {
    const dispatch = useDispatch()

    return (
        <nav className='flex h-18 py-4 w-full m-auto text-white'> 
            <Link to='/'>
                <h1 className="transform duration-300 hover:-translate-y-1 font-display font-thin tracking-wide m-auto pl-4 md:pl-12 text-3xl md:text-5xl">bloom</h1>
            </Link>

            <ul className='flex justify-end items-end pr-24 w-full space-x-12 font-display font-light'>
                <Link to='/about'>
                    <li className='transition duration-300 transform hover:-translate-y-1 hover:text-red-500 hover:font-normal border-red-500 hover:border-b-2'>About</li>
                </Link>
                <Link to='/shop'>
                    <li className='transition duration-300 transform hover:-translate-y-1 hover:text-red-500 hover:font-normal border-red-500 hover:border-b-2'>Shop</li>
                </Link>

                <li 
                    onClick = {() => dispatch(displayCart())}
                    className='flex transition duration-300 transform hover:-translate-y-1 hover:text-red-500 
                    hover:font-normal border-red-500 hover:border-b-2'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                </li>
            </ul>
        </nav>
  );
};

export default Nav;