import React from 'react'

function CartDisplay(props) {
    return (
        <div className='relative flex space-x-4'>
            <img 
                className='h-12 w-12'
                src={props.img} alt=''/>
            <div className='flex justify-between'>
                <p>{props.id}</p>
                <p>{props.name}</p>
                <p>{props.price}</p>
                <p>{props.quantity}</p>
            </div>
        </div>
    )
}

export default CartDisplay