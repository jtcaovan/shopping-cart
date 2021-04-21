import React from 'react'

function Footer() {
    return(
        <footer className='bg-gray-200 bg-opacity-40 w-full my-20 py-12'>
            <div className='flex justify-center p-6 space-x-24 '>
                <div>
                    <h1 className='text-2xl'>Join the Bloom Family</h1>
                    <input type='text' className='bg-white text-lg w-42 p-2' placeHolder='Enter Your Email...'></input>
                    <button className='bg-red-500 text-white font-body rounded-md text-lg p-2 w-38 transform duration-200 hover:-translate-y-1 hover:bg-red-600'>Subscribe</button>
                </div>

                <div className='flex flex-col space-y-4'>
                    <h1 className='text-2xl'>Bloom</h1>
                    <p>About Us</p>
                    <p>FAQ</p>
                </div>       
                <div className='flex flex-col space-y-4'>
                    <h1 className='text-2xl'>Shop</h1>
                    <p>Air Purifying</p>
                    <p>Pet Friendly</p>
                    <p>Beginner Friendly</p>
                </div>
                <div className='flex flex-col space-y-4'>
                    <h1 className='text-2xl'>Follow Us</h1>
                </div>
            </div>
        </footer>
    )
}

export default Footer