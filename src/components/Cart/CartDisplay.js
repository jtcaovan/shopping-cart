import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch} from 'react-redux'
import { subtractCartQuantity , increaseCartQuantity, addToTotal, subtractFromTotal} from '../Cart/cartSlice'

function CartDisplay(props) {
    const dispatch = useDispatch()

    function addQuantityToCart() {
        dispatch(increaseCartQuantity(props.id))
        dispatch(addToTotal(props.price))
    }

    function subtractQuantityFromCart() {
        dispatch(subtractCartQuantity(props.id))
        dispatch(subtractFromTotal(props.price))
    }

    return (
        <div className='flex justify-between space-x-6 items-center mx-4 my-4'>
            <Link to={`/shop/collection/${props.name}`}
            className='w-1/5 shadow-md hover:opacity-75 hover:border hover:border-gray-300'
            >
                <img 
                    src={props.img} alt=''
                />
            </Link>

            <div className='flex-col w-1/2 space-y-2'>
                <p className='text-md'>{props.name}</p>

                <div className='h-8 flex'>
                    <div className='p-2 border-2 cursor-pointer' onClick = {subtractQuantityFromCart}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/>
                        </svg>
                    </div>

                    <p className='px-2 py-1 border-t-2 border-b-2'>{props.quantity}</p>

                    <div className='p-2 border-2 cursor-pointer' onClick = {addQuantityToCart}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                        </svg> 
                    </div>
                </div>
            </div>

            <p className='w-1/6 font-semibold'>${Math.round((props.price * props.quantity)* 100)/100}</p>
        </div>
    )
}

export default CartDisplay