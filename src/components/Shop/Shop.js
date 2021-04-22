import React from 'react'
import itemData from './ItemData'
import ItemDisplay from './ItemDisplay'
import Footer from 'components/Footer/Footer'
import ShopHero from 'components/Shop/ShopHero'
import ShopNav from 'components/Shop/ShopNav'

let plants = itemData.map(plant => 
    <ItemDisplay
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
  