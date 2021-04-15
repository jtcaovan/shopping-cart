import React from 'react'
import pepperonia from 'assets/pepperonia.jpg'
import pots from 'assets/pots.jpg'
import collection2 from 'assets/collection2.jpg'

function CircleCards() {
    return(
        <div>
            <h1 className='m-10 p-6 text-5xl text-center'>Why You'll Love Bloom</h1>
            <ul className='flex text-center justify-around'>
                <li>
                    <img className="m-auto h-52 w-52 rounded-full" src={pepperonia} alt='' />
                    <h2 className='text-xl font-display'> Planted with Love </h2>
                    <p className='font-body'>Our plants cultivated by experts who share<br></br>
                    the same passion for houseplants as you. We guarantee <br></br>
                    your plant arrives happy and healthy or your money back!
                    </p> 
                </li>
                <li>
                <img className="m-auto h-52 w-52 rounded-full" src={collection2} alt='' />
                    <h2 className='text-xl font-display'>Sustainable Approach</h2>
                    <p className='font-body'>Our Eco-Friendly Packaging is 100% biodegradable!<br></br>
                    Everything we ship can be broken down to be used <br></br>
                    as fertilizer for your plants!
                    </p> 
                </li>
                <li>
                <img className="m-auto h-52 w-52 rounded-full" src={pots} alt='' />
                    <h2 className='text-xl font-display'>Hand Crafted</h2>
                    <p className='font-body'> Materials are sourced locally and hand-crafted by artisans <br></br> 
                    from o ur community. Each ceramic piece may have slight<br></br>
                        variations in size and color so you'll find <br></br>
                    each planter unique to your own living space.
                    </p> 
                </li>
            </ul>
        </div>
    )
}

export default CircleCards