import React from 'react'
import fiddle from '../assets/fiddle.jpg'
import arecaPalm from '../assets/shop/arecaPalm.jpg'
import fern from '../assets/shop/fern.jpg'
import peaceLily from '../assets/shop/peaceLily.jpg'
import pothos from '../assets/shop/pothos.jpg'
import rubberTree from '../assets/shop/rubberTree.jpg'

function Shop() {
  return (
    <div className='h-screen'>
      <div className='block h-3/4 w-screen'>
        <div className='fixed h-3/4 max-h-full w-full'>
          <div className='bg-cover bg-fixed bg-no-repeat h-full' 
          style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${fiddle})` }}>
          {/* <img src={shop} alt='' /> */}
          <h1 className='absolute top-1/2 left-1/2 inset-0 text-white text-5xl m-auto z-10'>A Plant for Every Space</h1>
          </div>
        </div>
      </div>

      <div className="absolute bg-white inset-x-0 w-screen p-10 z-10">
          <div>
            <h1 className='text-4xl text-center'>All Plants</h1>
            <div className='p-6 flex'>
              <p>Filter</p>

            </div>
          </div>
            <div className='grid grid-cols-3 gap-12'>
              {/* <img src={arecaPalm} alt=''/> */}
              <img src={fern} alt=''/>
              <img src={peaceLily} alt=''/>
              <img src={pothos} alt=''/>
              <img src={rubberTree} alt=''/>
            </div>
      </div>

    </div>
    )
  }
  
  export default Shop;
  