import React from 'react'
import Hero from './Hero'
import Nav from 'components/Nav/Header'
import TextCards from './TextCards'
import ShopCards from './ShopCards'
import CircleCards from './CircleCards'
import Footer from 'components/Footer/Footer'

function Home() {
  return (
    <div className='h-screen'>
      <Nav />
      <Hero />
      <div className="relative min-h-0 h-auto">
          <div className="h-full absolute -top-28 inset-x-0">
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
