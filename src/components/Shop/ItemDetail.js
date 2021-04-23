import React from 'react'
import Nav from 'components/Nav/ItemHeader'
import { useParams } from 'react-router-dom'
import itemData from './ItemData'
import Footer from 'components/Footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw }  from '@fortawesome/free-solid-svg-icons'
import { faSeedling }  from '@fortawesome/free-solid-svg-icons'
import { faSun }  from '@fortawesome/free-solid-svg-icons'
import { faWind }  from '@fortawesome/free-solid-svg-icons'


function ItemDetail() {

    let { name } = useParams();
    let plant = itemData.find(item => name === item.name)

    return(
        <div>
            <Nav />
            <div className='h-screen'>
                {/* <div className='flex'>
                    <p className='font-body text-red-500 font-light'>Home  /</p> 
                    <p className='font-body text-red-500 font-light'>Shop   /</p> 
                    <p>{plant.name}</p>
                </div> */}
                <div className='h-4/5 w-10/12 my-12 mx-auto flex space-x-24 justify-between '>
                    <img className='' src={plant.img} alt=''/>

                    <div className='w-1/3 flex-col space-y-8'>
                        <div className='flex'>
                            <h1 className='font-display text-5xl'>{plant.name}</h1>
                            <p className='font-body'>{plant.price}</p>
                        </div>

                        <div>
                            <h2 className='font-body'>Ceramic Pot Color</h2>
                        </div>

                        <div className='mt-6'>
                            <h2 className='font-body'>Details</h2>
                            <div className='font-body'><FontAwesomeIcon icon={ faSun }/> {plant.light}</div>
                            <div>
                                {plant.purify && 
                                <div className='flex'>
                                    <FontAwesomeIcon icon={ faWind } />
                                    <p className='font-body'>Air Purifying</p>
                                </div>}
                            </div>
                            <div>
                                {plant.beginner && 
                                <div className='flex'>
                                    <FontAwesomeIcon icon={ faSeedling } />
                                    <p className='font-body'>Beginner Friendly</p>
                                </div>}
                            </div>
                            <div>
                                {plant.petFriendly && 
                                <div className='flex'>
                                    <FontAwesomeIcon icon={ faPaw } />
                                    <p className='font-body'>Pet Friendly</p>
                                </div>}
                            </div>
                        </div>

                        <button className='w-full h-12 p-4 font-body text-sm bg-gray-800 bg-opacity-60 text-white rounded-r
                            transition duration-300 border-gray-900 hover:bg-transparent hover:text-gray-900 hover:border'>Add to Cart</button>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default ItemDetail