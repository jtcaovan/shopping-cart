import React from 'react'
import about from 'assets/about.jpg'

function AboutHero() {
    return(
        <div className='bg-center md:bg-cover bg-fixed bg-no-repeat h-3/4 md:h-screen md:w-full' 
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${about})` }}>
          <h1 className='flex text-4xl md:text-5xl h-full md:ml-auto md:mt-auto w-full md:w-1/2 
           text-white font-display justify-center items-center'>
                Who Are We?
            </h1>
        </div>
    )
}


export default AboutHero