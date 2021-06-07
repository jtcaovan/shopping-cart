import React from 'react'
import window from 'assets/window.jpg'
import work from 'assets/work.jpg'
import { Link } from 'react-router-dom'

function TextCards() {
    return(
        <div className='mt-24'>

            <div className='bg-gray-200 bg-opacity-40 py-8 my-24 grid grid-rows-2 grid-cols-2 gap-y-24'>
                <div className='m-auto p-16 2xl:w-8/12 space-y-8'>
                    <h2 className='font-display text-4xl'>Brighten Your Living Space</h2>
                    <p class='font-body text-xl tracking-wide break-words leading-loose'>
                        Bring nature home with you. Styling your home with
                        plants is an easy and inexpensive way to bring
                        the most boring rooms to life.  
                    </p>
                    <div>
                        <Link className='' to='/shop/all'>
                            <button className='bg-red-500 font-body rounded-md text-white text-xl p-4 w-48
                            transform duration-200 hover:-translate-y-1 hover:bg-red-600'>Shop Now</button>
                        </Link>
                    </div>
                </div>

                <div >
                    <img src={work} alt='' />
                </div>

                <div >
                    <img src={window} alt='' />
                </div>

                <div className='m-auto p-14 2xl:w-8/12 space-y-8'>
                    <h2 className='font-display text-4xl'>Breathe Better. Live Better.</h2>
                    <p className='font-body text-xl tracking-wide break-words leading-loose'>
                        Healthy air quality should be a top priority.
                        Plants release oxygen and remove toxins from the air 
                        so you can work, breathe, and sleep easier. </p>
                <div>
                <Link to='/shop/airPurifying'>
                        <button className='p-4 w-48 bg-red-500 font-body rounded-md text-white text-xl 
                        transform duration-200 hover:-translate-y-1 hover:bg-red-600'>Shop Air Purifiers</button>
                    </Link>
                </div>
                </div>
            </div>    
        </div>
    )
}
export default TextCards