import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus }  from '@fortawesome/free-solid-svg-icons'
import { faMinus }  from '@fortawesome/free-solid-svg-icons'

function CartDisplay(props) {

    return (
        <div className='flex h-26 justify-between items-center m-6'>
            <img 
                className='w-1/6 hover:opacity-75 hover:border hover:border-gray-300'
                src={props.img} alt=''
            />

            <p className='w-2/6'>{props.name}</p>
            <FontAwesomeIcon icon={faMinus}/>
            <p className='border-2 p-2'>{props.quantity}</p>
            <FontAwesomeIcon icon={faPlus}/>
            <p className='w-1/6'>${props.price * props.quantity}</p>
        </div>
    )
}

export default CartDisplay