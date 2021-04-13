import React from 'react'

function ShopItems(props) {
    return(
        <div>
            <img src={props.img} alt=''/>
                <div className='flex justify-between text-xl py-3'>
                    <p>{props.name}</p>
                    <p>{props.price}</p>
                </div>
        </div>
    )
}

export default ShopItems