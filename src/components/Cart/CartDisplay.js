import React from 'react'

function CartDisplay(props) {

    return (
        <div className='flex h-26 justify-between items-center m-6'>
            <img 
                className='w-1/6 hover:opacity-75 hover:border hover:border-gray-300'
                src={props.img} alt=''
            />

            <p className='w-2/6'>{props.name}</p>

            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
            </svg>            
            <p className='border-2 p-2'>{props.quantity}</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg> 

            <p className='w-1/6'>${props.price * props.quantity}</p>
        </div>
    )
}

export default CartDisplay