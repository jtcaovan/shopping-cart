import React from 'react'
import Hero from './Hero'
import TextCards from './TextCards'
import ShopCards from './ShopCards'
import CircleCards from './CircleCards'
import Footer from 'components/Footer/Footer'

function Home() {
  return (
    <div className='w-screen h-full'>
      <Hero />
      <div className="relative h-full">
          <div className="h-full w-screen absolute -top-28 inset-x-0">
            <ShopCards />
            <TextCards />
            <CircleCards />
            <Footer />
          </div>
      </div>
    </div>
  );
}

export default Home;
