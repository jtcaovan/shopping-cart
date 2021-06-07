import React from 'react'
import { Link } from 'react-router-dom'
import snake2 from 'assets/snake2.jpg'
import collection from 'assets/collection.jpg'
import monstera from 'assets/monstera.jpg'
import succulents from 'assets/succulents.jpg'

function ShopCards () {
    return(
        <div>
            <h1 className='pl-7 pt-14 pb-20 bg-white font-display text-gray-800 text-6xl'>Featured Collections</h1>

            <ul className='flex justify-around bg-white text-2xl'>
                <Link to='/shop/beginner'>
                    <li className='space-y-6 cursor-pointer transform hover:scale-105 hover:text-red-500 duration-200'>            
                        <img className='h-96 shadow-xl' src={snake2} alt=''/>
                        <p className='font-body'>Beginner Friendly</p>
                    </li>
                </Link>
                <Link to='/shop/airPurifying'>
                    <li className='space-y-6 cursor-pointer transform hover:scale-105 hover:text-red-500 duration-200'>
                        <img className='h-96 shadow-xl' src={collection} alt=''/>
                        <p className='font-body'>Air Purifiers</p>
                    </li>
                </Link>
                <Link to='/shop/petFriendly'>
                    <li className='space-y-6 cursor-pointer transform hover:scale-105 hover:text-red-500 duration-200'>
                        <img className='h-96 shadow-xl hover:shadow-2xl' src={monstera} alt=''/>
                        <p className='font-body'>Pet Friendly</p>
                    </li>
                </Link>
                <Link to='/shop/succulents'>
                    <li className='space-y-6 cursor-pointer transform hover:scale-105 hover:text-red-500 duration-200'>
                        <img className='h-96 shadow-xl' src={succulents} alt=''/>
                        <p className='font-body'>Shop Succulents</p>
                    </li>
                </Link>
            </ul>
        </div>
    )
}

export default ShopCards 