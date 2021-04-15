import React from 'react'
import window from 'assets/window.jpg'
import work from 'assets/work.jpg'

function TextCards() {
    return(
        <div className='mt-24'>

            <div className='text-center space-y-6'>
                <h1 className='font-display text-5xl'>Buy Some Plants</h1>
                <h2 className='font-body text-2xl'> Lorem ipsum dodaksd osdka </h2>
            </div>

            <div className='bg-gray-200 bg-opacity-40 py-8 my-24 grid grid-rows-2 grid-cols-2 gap-y-24'>
                <div className='m-auto space-y-8'>
                    <h2 className='font-display text-2xl'>Brighten Up Your Living Space</h2>
                    <p class='font-body text-lg'>Bring nature home with you. Incorpoating plants <br></br> 
                    into your daily surroundings 
                    will bring your space to life. 
                    </p>
                </div>

                <div className=''>
                    <img className="" src={work} alt='' />
                </div>

                <div className='ml-4'>
                    <img className="" src={window} alt='' />
                </div>

                <div className='m-auto space-y-8'>
                    <h2 className='font-display text-2xl'>Breathe Better. Live Better.</h2>
                    <p className='font-body text-lg'>Plants release oxygen increasing air quality <br></br>
                    so you can move, breathe, and sleep easier.</p>
                </div>
            </div>    
        </div>
    )
}
export default TextCards