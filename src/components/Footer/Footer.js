import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return(
        <footer className='bg-gray-200 bg-opacity-40 w-full my-20 pt-8 pb-28'>
            <div className='flex justify-center p-6 space-x-24 '>
                <div className='mr-10'>
                    <h1 className='font-display font-medium text-2xl text-gray-900'>Join the Bloom Family</h1>
                    <p className='font-body py-4 w-72 text-gray-700'>Get plant care tips and tricks delivered straight to your mailbox.</p>
                    <div className='flex mt-6'>
                        <input className='h-12 p-4 rounded-l font-body bg-gray-100 border-gray-400 border' 
                            type='text' 
                            placeholder='Enter Your Email...'></input>
                        <button className='h-12 p-4 w-28 font-body text-sm bg-gray-900 text-white rounded-r
                            transition duration-300 border-gray-900 hover:bg-transparent hover:text-gray-900 hover:border'>
                            Subscribe
                        </button>
                    </div>
                </div>

                <div className='flex flex-col space-y-4'>
                    <Link to='/'>
                        <h1 className='font-display font-medium text-lg text-gray-900'>Bloom</h1>
                    </Link>
                    <Link className='font-body text-gray-700 flex-col space-y-4' to='/about'>
                        <p>About Us</p>
                        <p>FAQ</p>
                    </Link>
                </div>       
                <div className='flex flex-col space-y-4'>
                    <Link to='/shop'>
                        <h1 className='font-display font-medium text-lg text-gray-900'>Shop</h1>
                    </Link>
                    <p className='font-body text-gray-700'>Air Purifying</p>
                    <p className='font-body text-gray-700'>Pet Friendly</p>
                    <p className='font-body text-gray-700'>Beginner Friendly</p>
                    <p className='font-body text-gray-700'>Succulents</p>
                </div>
                <div className='flex flex-col space-y-4'>
                    <h1 className='font-display font-medium text-lg text-gray-900'>Contact</h1>
                    <p className='font-body text-gray-700'>jtcaovan@gmail.com</p>
                    <div className='flex space-x-6'>
                        <a href='https://github.com/jtcaovan' target='_blank rel="noopener noreferrer"'><FontAwesomeIcon className='text-2xl text-gray-700 hover:text-gray-900' icon={ faGithub } /> </a>
                        <FontAwesomeIcon className='text-2xl text-gray-700 hover:text-gray-900' icon={ faLinkedin } />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer