import React from 'react'
import succulent from 'assets/succulent.jpg'
import pots from 'assets/pots.jpg'
import collection2 from 'assets/collection2.jpg'

function CircleCards() {
    return(
        <div className='mb-20'>
            <h1 className='m-10 p-6 text-5xl font-display text-gray-800 text-center'>Why You'll Love Bloom</h1>
            <ul className='flex m-auto w-9/12 space-x-12 text-center justify-around'>
                <li>
                    <img className="m-auto h-52 w-52 rounded-full" src={succulent} alt='' />
                    <h2 className='text-2xl text-gray-800 mt-6 font-display'> Planted with Love </h2>
                    <p className='font-body font-light text-gray-800 w-80 mt-6 leading-relaxed break-words'>
                    Our plants cultivated by experts who share
                    the same passion for houseplants as you. We guarantee
                    your plant arrives happy and healthy or your money back!
                    </p> 
                </li>
                <li>
                    <img className="m-auto h-52 w-52 rounded-full" src={collection2} alt='' />
                    <h2 className='text-2xl text-gray-800 mt-6 font-display'>Sustainable Approach</h2>
                    <p className='font-body font-light text-gray-800 w-80 mt-6 leading-relaxed break-words'>
                    Our Eco-Friendly Packaging is 100% biodegradable!
                    Everything we ship can be broken down
                    as fertilizer for your plants!
                    </p> 
                </li>
                <li>
                    <img className="m-auto h-52 w-52 rounded-full" src={pots} alt='' />
                    <h2 className='text-2xl text-gray-800 mt-6 font-display'>Hand Crafted</h2>
                    <p className='font-body font-light text-gray-800 w-80 mt-6 leading-relaxed break-words'>
                    Materials are sourced locally and hand-crafted by artisans
                    from our community. Each ceramic piece will be unique to your own living space.
                    </p> 
                </li>
            </ul>
        </div>
    )
}

export default CircleCards