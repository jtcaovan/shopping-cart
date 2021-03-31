import React from "react";
import './index.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
        <nav>
            <h3>Logo</h3>
            <ul>
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