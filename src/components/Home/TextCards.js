import React from 'react'
import window from 'assets/window.jpg'
import work from 'assets/work.jpg'
import { Link } from 'react-router-dom'

function TextCards() {
    return(
        <div className='my-24 py-24 bg-gray-200 bg-opacity-40 w-full'>
            <div className='2xl:w-3/4 m-auto flex flex-col justify-center space-y-16'>
                <div className='flex flex-col md:flex-row w-full m-auto justify-between space-y-6 md:space-y-0'>
                    <div className='flex justify-start md:w-1/2 mx-3 md:mx-0'>
                        <img src={window} alt='' />
                    </div>
                    <div className='flex flex-col md:w-5/12 space-y-8 justify-center text-center md:text-left mx-4 md:mr-6 2xl:mr-0'>
                        <h2 className='font-display text-2xl md:text-4xl'>Brighten Your Living Space</h2>
                            <p class='font-body text-lg md:text-xl tracking-wide break-words leading-loose'>
                                Bring nature home with you. Styling your home with
                                plants is an easy and inexpensive way to bring
                                the most boring rooms to life.  
                            </p>
                            <Link className='' to='/shop'>
                                <button className='p-4 w-36 md:w-48 bg-red-500 font-body rounded-md text-white text-sm md:text-xl 
                            transform duration-200 hover:-translate-y-1 hover:bg-red-600'>Shop Now</button>
                            </Link>
                    </div>
                </div>
                <div className='flex flex-col-reverse md:flex-row w-full m-auto justify-between space-y-8 md:space-y-0'>
                    <div className='flex flex-col md:w-5/12 space-y-8 justify-center text-center md:text-left mx-4 md:mr-6 2xl:mr-0'>
                        <h2 className='font-display pt-4 md:pt-0 text-2xl md:text-4xl'>Breathe Better. Live Better.</h2>
                        <p className='font-body text-lg md:text-xl tracking-wide break-words leading-loose'>
                            Healthy air quality should be a top priority.
                            Plants release oxygen and remove toxins from the air 
                            so you can work, breathe, and sleep easier. </p>
                        <Link to='/shop/airPurifying'>
                            <button className='p-4 w-36 md:w-48 bg-red-500 font-body rounded-md text-white text-sm md:text-xl 
                            transform duration-200 hover:-translate-y-1 hover:bg-red-600'>Shop Air Purifiers</button>
                        </Link>
                    </div>
                    <div className='flex justify-start md:w-1/2 mx-3 md:mx-0'>
                        <img src={work} alt='' />
                    </div>
                </div>
                
            </div>    
        </div>
    )
}
export default TextCards