import React from 'react'
import { Link, useParams } from 'react-router-dom'

function ShopNav() {
    let name = useParams()

    return(
        <div>              
            <div className='font-display mt-12 mb-2 text-4xl font-medium text-center text-gray-700'>
                {name.collection === undefined && <h1> Bloom's Collection </h1>}
                {name.collection === 'airPurifying' && <h1>Air Purifying Plants</h1>}
                {name.collection === 'beginner' && <h1>Plants for Beginners</h1>}
                {name.collection === 'pet-friendly' && <h1>Pet Friendly Plants</h1>}
                {name.collection === 'succulents' && <h1>Succulents</h1>}
            </div>
            <div className='font-body text-gray-600 text-center'>
                {name.collection === undefined && <p>Shopping for plants has never been easier</p>}
                {name.collection === 'airPurifying' && <p>Breathe easy with these air cleaning plants.</p>}
                {name.collection === 'beginner' && <p>Easy to care for, even for first time plant owners. </p>}
                {name.collection === 'pet-friendly' && <p>Safe plants for your fuzzy friends.</p>}
                {name.collection === 'succulents' && <p>Beautiful small plants that can survive sporadic watering.</p>}
            </div>

            <div className='flex space-x-4 z-10 w-screen justify-center mt-6 mb-12 '>
                <Link to={'/shop'} className={name.collection === undefined && 'hidden'}>
                    <button className='p-2 border-2 rounded-lg font-body bg-gray-200 bg-opacity-40 text-gray-700 hover:bg-gray-300 hover:bg-opacity-40'>Shop All</button>
                </Link>
                <Link to={`/shop/airPurifying`} className={name.collection === 'airPurifying' && 'hidden'}>
                    <button className='p-2 border-2 rounded-lg font-body bg-gray-200 bg-opacity-40 text-gray-700 hover:bg-gray-300 hover:bg-opacity-40'>Air Purifying</button>
                </Link>
                <Link to={`/shop/beginner`} className={name.collection === 'beginner' && 'hidden'}>
                    <button className='p-2 border-2 rounded-lg font-body bg-gray-200 bg-opacity-40 text-gray-700 hover:bg-gray-300 hover:bg-opacity-40'>Beginner Friendly</button>
                </Link>
                <Link to={`/shop/pet-friendly`} className={name.collection === 'pet-friendly' && 'hidden'}>
                    <button className='p-2 border-2 rounded-lg font-body bg-gray-200 bg-opacity-40 text-gray-700 hover:bg-gray-300 hover:bg-opacity-40'>Pet Friendly</button>
                </Link>
                <Link to={`/shop/succulents`} className={name.collection === 'succulents' && 'hidden'}>
                    <button className='p-2 border-2 rounded-lg font-body bg-gray-200 bg-opacity-40 text-gray-700 hover:bg-gray-300 hover:bg-opacity-40'>Succulents</button>
                </Link>
            </div>
        </div>
    )
}

export default ShopNav