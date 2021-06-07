import React from 'react'
import { Link, useParams } from 'react-router-dom'

function ShopNav() {
    let name = useParams()

    return(
        <div>              
            <div className='font-display mt-12 text-4xl font-medium text-center text-gray-700'>
                {name.collection === undefined && <h1> Bloom's Collection </h1>}
                {name.collection === 'airPurifying' && <h1>Air Purifying Plants</h1>}
                {name.collection === 'beginner' && <h1>Plants for Beginners</h1>}
                {name.collection === 'pet-friendly' && <h1>Pet Friendly Plants</h1>}
                {name.collection === 'succulents' && <h1>Succulents</h1>}
            </div>
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