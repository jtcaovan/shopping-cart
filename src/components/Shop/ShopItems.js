import React from 'react'

function ShopItems(props) {
    return(
        <div>
            <img className='filter cursor-pointer drop-shadow-md hover:opacity-75' src={props.img} alt=''/>
                <div className='font-body flex justify-between text-xl py-3'>
                    <p>{props.name}</p>
                    <p>{props.price}</p>
                </div>
        </div>
    )
}

export default ShopItems