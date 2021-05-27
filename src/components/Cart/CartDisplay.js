import React from 'react'

function CartDisplay(props) {
    return (
        <div className='flex justify-between m-6'>
            <img 
                className='h-12 w-12'
                src={props.img} alt=''
            />
            <p>{props.name}</p>
            <p>{props.quantity}</p>
            <p>{props.price}</p>
        </div>
    )
}

export default CartDisplay