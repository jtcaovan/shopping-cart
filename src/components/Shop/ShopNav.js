import React from 'react'

function ShopNav() {
    return(
        <div>              
            <h1 className='font-display mt-12 text-4xl font-medium text-center text-gray-700'>Bloom's Collection</h1>
            <p className='font-body text-gray-600 text-center'>Shopping for plants has never been easier</p>
            <div className='flex space-x-4 justify-center mt-6 mb-12 '>
                <p className='p-2 border-2 rounded-lg font-body bg-gray-200 bg-opacity-40 text-gray-700 hover:bg-gray-300 hover:bg-opacity-40'>Air Purifying</p>
                <p className='p-2 border-2 rounded-lg font-body bg-gray-200 bg-opacity-40 text-gray-700 hover:bg-gray-300 hover:bg-opacity-40'>Beginner Friendly</p>
                <p className='p-2 border-2 rounded-lg font-body bg-gray-200 bg-opacity-40 text-gray-700 hover:bg-gray-300 hover:bg-opacity-40'>Pet Friendly</p>
                <p className='p-2 border-2 rounded-lg font-body bg-gray-200 bg-opacity-40 text-gray-700 hover:bg-gray-300 hover:bg-opacity-40'>Succulents</p>
            </div>
        </div>
    )
}

export default ShopNav