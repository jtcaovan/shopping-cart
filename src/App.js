import React from 'react'
import hero from './assets/hero.jpg'
import snake from './assets/snake.jpg'
import collection from './assets/collection.jpg'
import monstera from './assets/monstera.jpg'

function App() {
  return (
    <div>
      <div className='h-1/5 mb-10'>
        <img className='w-9/12 m-auto overflow-hidden' src={hero} alt='' />
      </div>

      <div>
        <ul className='flex justify-around'>
          <li>
            <img className='h-96' src={snake} alt=''/>
            <p>Best Sellers</p>
          </li>
          <li>            
            <img className='h-96' src={collection} alt=''/>
            <p>Best for Beginners</p>
          </li>
          <li>
            <img className='h-96' src={monstera} alt=''/>
            <p>Shop our collection</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
