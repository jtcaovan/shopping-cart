import React from 'react'
import hero from '../assets/hero.jpg'
import pothos from '../assets/hangingPothos.jpg'
import collection from '../assets/collection.jpg'
import monstera from '../assets/monstera.jpg'

function App() {
  return (
    <div className=''>

      <div className='bg-cover bg-fixed bg-no-repeat h-screen p-10' style={{ backgroundImage: `url(${hero})` }}>
            <p className='mt-80 ml-80 text-white text-5xl '>Award winning plants<br></br>right to your doorstep</p>
      </div>

      <div className="absolute bottom-1/4 inset-x-0">
        <ul className='absolute flex justify-around top-36 h-screen inset-x-0 pt-16 bg-white text-2xl'>
          <li>
              <p>Best Sellers</p>
            <img className='h-96 rounded-lg' src={monstera} alt=''/>
          </li>
          <li>            
            <p>Best for Beginners</p>
            <img className='h-96 rounded-lg' src={pothos} alt=''/>
          </li>
          <li>
            <p>Shop our collection</p>
            <img className='h-96 rounded-lg' src={collection} alt=''/>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
