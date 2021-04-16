import React from 'react'
import Hero from './Hero'
import TextCards from './TextCards'
import ShopCards from './ShopCards'
import CircleCards from './CircleCards'

function App() {
  return (
    <div className='relative'>
      <Hero />

      <div id='contentContainer' className="relative min-h-0 h-auto">
        <div className="h-full absolute -top-28 inset-x-0">
          <ShopCards />
          <TextCards />
          <CircleCards />
        </div>
      </div>
    </div>
  );
}

export default App;
