import React from 'react'
import Nav from 'components/Nav/ItemHeader'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, displayCart, addQuantity, addToTotal} from '../Cart/cartSlice'

import Footer from 'components/Footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw }  from '@fortawesome/free-solid-svg-icons'
import { faSeedling }  from '@fortawesome/free-solid-svg-icons'
import { faSun }  from '@fortawesome/free-solid-svg-icons'
import { faWind }  from '@fortawesome/free-solid-svg-icons'
import { faStar }  from '@fortawesome/free-solid-svg-icons'


function ItemDetail() {
    const products = useSelector((state) => state.cart.products)
    const dispatch = useDispatch()
    let { name } = useParams()
    
    let product = products.find(item => name === item.name)

    function handleClick() {
        dispatch(addToCart({
            product,
            quantity: 0
        }))

        dispatch(addQuantity(product.id))
        dispatch(addToTotal(product.price))
        dispatch(displayCart())
    }

    return (
        <div>
            <Nav />
            <div className='h-screen'>
                <div className='h-4/5 w-10/12 my-12 mx-auto flex space-x-24 justify-between '>
                    <img src={product.img} alt=''/>

                    <div className='w-2/5 flex-col divide-y-2 space-y-8'>
                        <div className='space-y-8'>
                            <div className='flex justify-between '>
                                <h1 className='font-display text-5xl text-gray-800'>{product.name}</h1>
                                <p className='font-body text-xl text-gray-800'>${product.price}</p>
                            </div>

                            <div>
                                <p className='font-body leading-relaxed text-gray-700'>The {product.name} is a beautiful, statement piece product that brings style and brightness to any indoor space.
                                This product requires <span className='font-semibold'>{product.light}</span>.</p>
                            </div>

                            <div className='flex'>
                                <FontAwesomeIcon className='text-gray-800' icon={faStar} />
                                <FontAwesomeIcon className='text-gray-800' icon={faStar} />
                                <FontAwesomeIcon className='text-gray-800' icon={faStar} />
                                <FontAwesomeIcon className='text-gray-800' icon={faStar} />
                                <FontAwesomeIcon className='text-gray-800' icon={faStar} />
                                <p className='font-display font-light text-sm text-gray-600 tracking-wider pl-2 underline cursor-pointer hover:text-gray-900'>7,329 Reviews</p>
                            </div>
                        </div>

                        <div>
                            <h2 className='font-body font-semibold mt-4 text-gray-800'>Ceramic Pot Color</h2>
                            <div className='mt-4 mb-2 bg-gray-200 ring-2 ring-gray-700 w-8 h-8 rounded-full cursor-pointer'></div>
                            <p className='font-body text-sm text-gray-600'>White</p>
                        </div>

                        <div>
                            <h2 className='font-body font-semibold mt-4 text-gray-800'>Details</h2>
                            <div className='flex flex-col mt-2 space-y-2'>
                                <div className='flex'>
                                    <FontAwesomeIcon className='text-gray-700' icon={ faSun }/> 
                                    <p className='font-body ml-2 text-gray-700'>{product.light}</p>
                                </div>
                                <div>
                                    {product.beginner && 
                                    <div className='flex'>
                                        <FontAwesomeIcon className='text-gray-700' icon={ faSeedling } />
                                        <p className='font-body ml-2 text-gray-700'>Beginner Friendly</p>
                                    </div>}
                                </div>
                                <div>
                                    {product.purify && 
                                    <div className='flex'>
                                        <FontAwesomeIcon className='text-gray-700' icon={ faWind } />
                                        <p className='font-body ml-2 text-gray-700'>Air Purifying</p>
                                    </div>}
                                </div>
                                <div>
                                    {product.petFriendly && 
                                    <div className='flex'>
                                        <FontAwesomeIcon className='text-gray-700' icon={ faPaw } />
                                        <p className='font-body ml-2 text-gray-700'>Pet Friendly</p>
                                    </div>}
                                </div>
                            </div>

                            <button
                                onClick={handleClick}
                                className='w-full h-12 my-4 p-4 font-body text-sm bg-gray-900 bg-opacity-70 text-white rounded
                                transition duration-300 border-gray-900 hover:bg-transparent hover:text-gray-900 hover:border active:bg-gray-100 focus:outline-none'>
                                    Add to Cart
                            </button>

                            <div className='flex justify-around mt-2'>
                                <p className='w-24 font-body text-gray-600 hover:text-gray-900'>Made to order</p>
                                <p className='w-24 font-body text-gray-600 hover:text-gray-900'>60 Day Guarantee</p>
                                <p className='w-24 font-body text-gray-600 hover:text-gray-900'>24/7 Plant Help</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default ItemDetail