import React from 'react'
import { Link } from 'react-router-dom'


function ShopItems(props) {
    return(
        <div>
            <Link to={`/shop/${props.name}`}>
            <img className='filter cursor-pointer rounded-md drop-shadow-md hover:opacity-75' src={props.img} alt=''/>
                <div className='font-body flex justify-between text-xl py-3'>
                    <p>{props.name}</p>
                    <p>${props.price}</p>
                </div>
            </Link>
        </div>
    )
}

export default ShopItems