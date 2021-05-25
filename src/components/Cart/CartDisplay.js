import React from 'react'

function CartDisplay(props) {

    return (
        <div className='relative flex space-x-4'>
            <img 
                className='h-32 w-32'
                src={props.img} alt=''/>
            <div>
                <p>{props.name}</p>
                <p>{props.price}</p>
            </div>
        </div>
    )
}

export default CartDisplay