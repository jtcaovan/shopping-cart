import React from 'react'
import snake2 from 'assets/snake2.jpg'
import collection from 'assets/collection.jpg'
import monstera from 'assets/monstera.jpg'
import succulents from 'assets/succulents.jpg'

function ShopCards () {
    return(
        <ul className='flex justify-around pt-20 bg-white text-2xl'>
            <li className='space-y-6 cursor-pointer transform hover:scale-105 hover:text-red-500 duration-200'>
                <img className='h-96 shadow-xl hover:shadow-2xl' src={monstera} alt=''/>
                <p className='font-body'>Best Sellers</p>
            </li>
            <li className='space-y-6 cursor-pointer transform hover:scale-105 hover:text-red-500 duration-200'>            
                <img className='h-96 shadow-xl' src={snake2} alt=''/>
                <p className='font-body'>Beginner Friendly</p>
            </li>
            <li className='space-y-6 cursor-pointer transform hover:scale-105 hover:text-red-500 duration-200'>
                <img className='h-96 shadow-xl' src={collection} alt=''/>
                <p className='font-body'>Shop our Curated Collection</p>
            </li>
            <li className='space-y-6 cursor-pointer transform hover:scale-105 hover:text-red-500 duration-200'>
                <img className='h-96 shadow-xl' src={succulents} alt=''/>
                <p className='font-body'>Shop Succulents</p>
            </li>
      </ul>
    )
}

export default ShopCards 