import React from 'react'
import hero from './assets/hero.jpg'
import snake from './assets/snake.jpg'
import collection from './assets/collection.jpg'
import monstera from './assets/monstera.jpg'

function App() {
  return (
    <div>
      <div className=''>
        <img className='m-auto' src={hero} alt='' />
      </div>

      <div className="">
        <ul className='flex -mt-40 bg-white justify-around'>
          <li>
          <img className='h-96' src={monstera} alt=''/>
            <p>Best Sellers</p>
          </li>
          <li>            
            <img className='h-96' src={snake} alt=''/>
            <p>Best for Beginners</p>
          </li>
          <li>
            <img className='h-96' src={collection} alt=''/>
            <p>Shop our collection</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
