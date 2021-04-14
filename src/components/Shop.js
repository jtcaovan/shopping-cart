import React from 'react'
import fiddle from '../assets/fiddle.jpg'
import shopData from './ShopData'
import ShopItems from './ShopItems'

let plants = shopData.map(plant => 
  <ShopItems 
      key={plant.id}
      name={plant.name} 
      light={plant.light}
      price={plant.price}
      purify={plant.purify}
      beginner={plant.beginner}
      petFriendly={plant.petFriendly}
      img={plant.img}
  />
  )

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
            <h1 className='text-4xl text-center'>Bloom's Collection</h1>
            <p className='text-center'>Shopping for plants has never been easier</p>
            <div className='p-6 flex'>
              <p>Sort By</p>
            </div>
          </div>

          <div className='grid grid-cols-3 gap-x-6 gap-y-20'>
            {plants}
          </div>
      </div>

    </div>
    )
  }
  
  export default Shop;
  