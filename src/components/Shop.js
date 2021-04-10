import React from 'react'
import shop from '../assets/shop.jpg'

function Shop() {
  return (
    <div className='h-screen'>
      <div className='block w-screen'>
        <div className='fixed h-3/4 w-full overflow-hidden'>
          <img src={shop} alt='' />
          <h1 className='text-white z-20'>A Plant for Every Space</h1>
        </div>
      </div>

      <div className="block w-screen">
          <div className="z-10">
            <h1 className=''>Shop Now</h1>
            <div className=''> Grid Container
              Shop Items
          </div>
        </div>
      </div>

    </div>
    )
  }
  
  export default Shop;
  