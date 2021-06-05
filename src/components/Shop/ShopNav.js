import React from 'react'
import { Link } from 'react-router-dom'

function ShopNav() {
    return(
        <div>              
            <h1 className='font-display mt-12 text-4xl font-medium text-center text-gray-700'>Bloom's Collection</h1>
            <p className='font-body text-gray-600 text-center'>Shopping for plants has never been easier</p>
            <div className='flex space-x-4 justify-center mt-6 mb-12 '>
                <Link to={`/shop/airPurifying`}>
                    <button className='p-2 border-2 rounded-lg font-body bg-gray-200 bg-opacity-40 text-gray-700 hover:bg-gray-300 hover:bg-opacity-40'>Air Purifying</button>
                </Link>
                <Link to={`/shop/beginner`}>
                    <button className='p-2 border-2 rounded-lg font-body bg-gray-200 bg-opacity-40 text-gray-700 hover:bg-gray-300 hover:bg-opacity-40'>Beginner Friendly</button>
                </Link>
                <Link to={`/shop/pet-friendly`}>
                    <button className='p-2 border-2 rounded-lg font-body bg-gray-200 bg-opacity-40 text-gray-700 hover:bg-gray-300 hover:bg-opacity-40'>Pet Friendly</button>
                </Link>
                <Link to={`/shop/succulents`}>
                    <button className='p-2 border-2 rounded-lg font-body bg-gray-200 bg-opacity-40 text-gray-700 hover:bg-gray-300 hover:bg-opacity-40'>Succulents</button>
                </Link>


            </div>
        </div>
    )
}

export default ShopNav