import React from 'react'
import { useSelector } from 'react-redux'
import ShopDisplay from './ShopDisplay'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import ShopHero from 'components/Shop/ShopHero'
import ShopNav from 'components/Shop/ShopNav'

function Shop() {
  const products = useSelector(state=> state.cart.products)

  let plants = products.map(plant => 
    <ShopDisplay
      key={plant.id}
      name={plant.name} 
      light={plant.light}
      price={plant.price}
      purify={plant.purify}
      beginner={plant.beginner}
      petFriendly={plant.petFriendly}
      img={plant.img}
    />)

  return (
      <div className='h-screen relative'>
        <Header />
        <ShopHero />
        <ShopNav />
        <div className='grid grid-cols-2 md:grid-cols-3 mx-8 mb-14 gap-x-8 gap-y-12'>
            {plants}
        </div>
        <Footer />
      </div>
    )
  }
  
  export default Shop;
  