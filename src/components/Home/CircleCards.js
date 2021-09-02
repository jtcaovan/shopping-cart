import React from 'react'
import succulent from 'assets/succulent.jpg'
import pots from 'assets/pots.jpg'
import collection2 from 'assets/collection2.jpg'

function CircleCards() {
    return(
        <div className='mb-20'>
            <h1 className='m-10 p-6 text-3xl md:text-5xl font-display text-gray-800 text-center'>Why You'll Love Bloom</h1>
            <ul className='flex flex-col md:flex-row m-auto w-full md:w-9/12 
                space-y-12 md:space-y-0 md:space-x-12 text-center md:justify-around'>
                <li className='flex flex-col space-y-6 m-auto '>
                    <img className="m-auto h-52 w-52 rounded-full" src={succulent} alt='' />
                    <h2 className='text-2xl text-gray-800 font-display'> Planted with Love </h2>
                    <p className='font-body font-light text-gray-800 w-80 leading-relaxed break-words'>
                    Our plants cultivated by experts who share
                    the same passion for houseplants as you. We guarantee
                    your plant arrives happy and healthy or your money back!
                    </p> 
                </li>
                <li className='flex flex-col space-y-6 m-auto '>
                    <img className="m-auto h-52 w-52 rounded-full" src={collection2} alt='' />
                    <h2 className='text-2xl text-gray-800 font-display'>Sustainable Approach</h2>
                    <p className='font-body font-light text-gray-800 w-80 leading-relaxed break-words'>
                    Our Eco-Friendly Packaging is 100% biodegradable!
                    Everything we ship can be broken down
                    as fertilizer for your plants!
                    </p> 
                </li>
                <li className='flex flex-col space-y-6 m-auto '>
                    <img className="m-auto h-52 w-52 rounded-full" src={pots} alt='' />
                    <h2 className='text-2xl text-gray-800 font-display'>Hand Crafted</h2>
                    <p className='font-body font-light text-gray-800 w-80 leading-relaxed break-words'>
                    Materials are sourced locally and hand-crafted by artisans
                    from our community. Each ceramic piece will be unique to your own living space.
                    </p> 
                </li>
            </ul>
        </div>
    )
}

export default CircleCards