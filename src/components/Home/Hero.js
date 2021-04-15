import React from 'react'
import hero from 'assets/hero.jpg'
import { Link } from 'react-router-dom'

function Hero() {
    return(
        <div 
            className='bg-cover bg-fixed bg-no-repeat h-screen' 
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${hero})` }}>
          <div className='absolute md:bottom-44 md:right-36 2xl:bottom-80 2xl:right-80 text-white'>
            <p className='font-display text-6xl mb-8'>
              Award Winning Plants, <br></br>Right to Your Doorstep
            </p>
            <p className='font-body my-6 text-2xl'>Shop our curated collection of <br></br> plants and accessories</p>
            <Link to='./shop'>
              <button className='bg-red-500 text-2xl p-4 w-48'>Shop Now</button>
            </Link>
          </div>
      </div>
    )
}

export default Hero