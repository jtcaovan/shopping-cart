import React from 'react'

function CartDisplay(props) {
    return (
        <div className='flex h-26 justify-between items-center m-6'>
            <img 
                className='w-16'
                src={props.img} alt=''
            />

            <p>{props.name}</p>
            <p>{props.quantity}</p>
            <p>{props.price}</p>
        </div>
    )
}

export default CartDisplay