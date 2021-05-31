import React from "react";
import CartDisplay from './CartDisplay'
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
        id={item.product.id}
        name={item.product.name} 
        price={item.product.price}
        img={item.product.img}
        quantity={item.quantity}
    />
  )

  return (
    <div className={display}>

      <div className='overflow-hidden overscroll-contain z-10 fixed w-full h-screen flex'>

        <div 
          className='absolute w-3/4 inset-0 bg-gray-700 bg-opacity-50 h-screen z-20'
          onClick={() => dispatch(hideCart())}
        >
        </div>

        <div className='absolute text-black inset-y-0 right-0 h-screen w-1/4 bg-white z-10'>
          <div className='flex justify-between bg-gray-200 bg-opacity-90'>
            <p className='text-4xl m-6 text-gray-800 font-display'>Cart <span className='text-lg'>({totalItems} items)</span></p>
              <svg 
                onClick={() => dispatch(hideCart())} 
                className="m-8 h-6 w-6" 
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </div>

          <div className=''>
                {totalItems === 0 &&   
                  <div className='font-body absolute inset-y-1/2 inset-x-1/3 w-full h-24'>
                    <p>Your cart is empty!</p>
                    <button 
                      className='h-12 p-4 my-4 w-1/3 font-body text-sm bg-gray-900 text-white rounded transition 
                      duration-300 border-gray-900 hover:bg-transparent hover:text-gray-900 hover:border'
                    >
                    Shop Now  
                    </button>
                </div> }

                {totalItems !== 0 &&
                <div>
                  <div className='flex-col p-2 font-body'>
                    {cartItems}
                    <p>Subtotal <b>${totalPrice}</b></p>
                  </div>
                  <div className='text-center'> 
                    <button   
                    className='h-12 p-4 my-6 w-2/4 font-body text-sm bg-gray-900 text-white rounded transition 
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