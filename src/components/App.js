import React from 'react'
import hero from '../assets/hero.jpg'
import pothos from '../assets/hangingPothos.jpg'
import collection from '../assets/collection.jpg'
import monstera from '../assets/monstera.jpg'

function App() {
  return (
    <div className=''>
      <div className='fixed'>
        <img className='' src={hero} alt='' />
      </div>

      <div className="absolute bottom-1/4 inset-x-0">
        <ul className='absolute flex justify-around top-20 h-screen inset-x-0 pt-16 bg-white text-2xl'>
          <li>
            <img className='h-96 rounded-lg' src={monstera} alt=''/>
              <p>Best Sellers</p>
          </li>
          <li>            
            <img className='h-96 rounded-lg' src={pothos} alt=''/>
            <p>Best for Beginners</p>
          </li>
          <li>
            <img className='h-96 rounded-lg' src={collection} alt=''/>
            <p>Shop our collection</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
