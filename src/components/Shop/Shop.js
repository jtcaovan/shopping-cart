import React from 'react'
import shopData from './ShopData'
import ShopItems from './ShopItems'
import Footer from 'components/Footer/Footer'
import ShopHero from 'components/Shop/ShopHero'
import ShopNav from 'components/Shop/ShopNav'

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
      <ShopHero />      
          <div className='h-full'>
            <ShopNav />

            <div className='grid grid-cols-3 mx-28 gap-x-16 gap-y-20'>
              {plants}
            </div>
            
            <Footer />
          </div>
    </div>
    )
  }
  
  export default Shop;
  