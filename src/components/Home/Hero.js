import React from 'react'
import Header from '../Header/Header'
import hero from 'assets/hero.jpg'
import { Link } from 'react-router-dom'

function Hero() {
    return(
      <div className='relative'>
        <Header />
        <div className='bg-cover bg-center md:bg-cover bg-fixed bg-no-repeat h-screen md:w-full' 
          style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${hero})` }}>
          <div className='flex flex-col h-full px-4 md:ml-auto md:mt-auto w-full md:w-1/2 justify-center text-white font-display space-y-4 md:space-y-6'>
            <p className='font-display text-2xl sm:text-5xl'>
              Beautiful Plants <br></br> Right to your Doorstep
            </p>
            <p className='font-light text-lg sm:text-2xl'>Shopping for Plants Has Never Been Easier</p>
            <Link to='./shop'>
              <button className='bg-red-500 font-body rounded-md text-lg sm:text-2xl p-2 sm:p-4 w-32 sm:w-48 transform duration-200 hover:-translate-y-1 hover:bg-red-600 '>Shop Now</button>
            </Link>
          </div>
        </div>
      </div>
  )
}

export default Hero