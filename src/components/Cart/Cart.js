import React from "react";

const Cart = () => {
  return (
    <div>
      <div className='relative overflow-hidden'>
        <div className='absolute inset-0 bg-gray-700 bg-opacity-50 h-screen z-20'>
          <div className='absolute inset-y-0 right-0 h-screen w-1/3 bg-white z-10'>
            <div className='m-6 flex justify-between'>
              <p className='text-4xl font-display'>Cart <span className='text-lg'>(0 items)</span></p>
              {/* <svg onClick={() => setOpen('invisible')} className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg> */}
            </div>
            <div className='absolute font-body inset-y-1/2 inset-x-1/3 w-full h-24'>
              <p>Your cart is empty!</p>
              <button className='h-12 p-4 my-4 w-1/3 font-body text-sm bg-gray-900 text-white rounded-r transition duration-300 border-gray-900 hover:bg-transparent hover:text-gray-900 hover:border'>
              Shop Now</button>          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;