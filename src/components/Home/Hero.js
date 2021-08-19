import React from 'react'
import hero from 'assets/hero.jpg'
import { Link } from 'react-router-dom'

function Hero() {
    return(
      <div 
        className='bg-cover bg-fixed bg-no-repeat h-screen w-full' 
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${hero})` }}>
        <div className='absolute bottom-1/2 md:bottom-44 md:right-36 2xl:bottom-80 2xl:right-80 text-white'>
          <p className='font-display text-3xl sm:text-5xl mb-8 break-words'>
            Beautiful Plants <br></br> Right to your Doorstep
          </p>
          <p className='font-body font-light my-6 text-lg sm:text-2xl'>Shopping for Plants Has Never Been Easier</p>
          <Link to='./shop'>
            <button className='bg-red-500 font-body rounded-md text-lg sm:text-2xl p-2 sm:p-4 w-32 sm:w-48 transform duration-200 hover:-translate-y-1 hover:bg-red-600 '>Shop Now</button>
          </Link>
        </div>
      </div>
    )
}

export default Hero