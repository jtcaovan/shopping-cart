import React from "react";
import CartDisplay from './CartDisplay'
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { hideCart } from '../Cart/cartSlice'

const Cart = () => {
  const display = useSelector((state) => state.cart.display)
  const cart = useSelector((state) => state.cart.currentCart)
  const totalItems = useSelector((state) => state.cart.totalItems)
  const totalPrice = useSelector((state) => state.cart.totalPrice)
  const dispatch = useDispatch()

  let cartItems = cart.map(item => 
    <CartDisplay 
        key={item.product.id}
        id={item.product.id}
        name={item.product.name} 
        price={item.product.price}
        img={item.product.img}
        quantity={item.quantity}
    />
  )

  return (
    <div className={display}>

      <div className='z-10 fixed w-full h-screen'>

        <div 
          className='absolute w-3/4 inset-0 bg-gray-700 bg-opacity-50 h-screen z-20'
          onClick={() => dispatch(hideCart())}
        >
        </div>

        <div className='absolute inset-y-0 right-0 h-screen w-1/4 bg-white z-10'>
          <div className='flex justify-between h-16 bg-gray-200 bg-opacity-90'>
            <p className='text-3xl mx-4 my-3 text-gray-700 font-display'>Cart <span className='text-lg'>({totalItems} items)</span></p>
              <svg 
                onClick={() => dispatch(hideCart())} 
                className="m-4 h-6 w-6 cursor-pointer text-gray-700 hover:text-gray-900" 
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </div>

          <div >
            {totalItems === 0 &&   
              <div className='font-body absolute inset-y-1/2 inset-x-1/3 w-full h-24'>
                <p>Your cart is empty!</p>
                <Link to='/shop/all'>
                  <button
                    onClick={() => dispatch(hideCart())}
                    className='h-12 p-4 my-4 w-1/3 font-body text-sm bg-gray-900 text-white rounded transition 
                    duration-300 border-gray-900 hover:bg-transparent hover:text-gray-900 hover:border'
                  >
                  Shop Now  
                  </button>
                </Link>
            </div> }

            {totalItems !== 0 &&
            <div>
              <div className='flex-col divide-y-2 p-2 font-body text-gray-700'>
                <div className='flex-col flex-shrink h-3/6 overflow-auto'>
                  {cartItems}
                </div>
                <div className='flex p-4 justify-between'>
                  <p className=''>Subtotal</p>
                  <p className='font-semibold'>${Math.round(totalPrice * 100)/ 100} </p>
                </div>
              </div>
              <div className='text-center'> 
                <button   
                className='h-12 p-4 w-2/4 font-body text-sm bg-gray-900 text-white rounded transition 
                  duration-300 border-gray-900 hover:bg-transparent hover:text-gray-900 hover:border'>
                    Checkout
                </button>
              </div>
            </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;