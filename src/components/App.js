import React from 'react'
import { Link } from 'react-router-dom'
import watering from '../assets/watering.jpg'
import pepperonia from '../assets/pepperonia.jpg'
import yoga from '../assets/yoga.jpg'
import pots from '../assets/pots.jpg'
import collection2 from '../assets/collection2.jpg'
import hero from '../assets/hero.jpg'
import pothos from '../assets/hangingPothos.jpg'
import collection from '../assets/collection.jpg'
import monstera from '../assets/monstera.jpg'

function App() {
  return (
    <div className=''>

      <div 
        className='relative bg-cover bg-fixed bg-no-repeat bg-opacity-20 h-screen p-10' 
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${hero})` }}>

          <div className='absolute md:bottom-44 md:right-36 2xl:bottom-80 2xl:right-80 text-white'>
            <p className='text-6xl mb-8'>
              Award Winning Plants, <br></br>Right to Your Doorstep
            </p>
            <p className='my-6 text-2xl'>Shop our curated collection of <br></br> plants and accessories</p>
            <Link to='./shop'>
              <button className='bg-red-500 text-2xl p-4 w-48'>Shop Now</button>
            </Link>
          </div>

      </div>

      <div className="absolute bottom-1/4 inset-x-0">
        <div className="absolute top-32 inset-x-0">
          <ul className='flex justify-around pt-10 bg-white text-2xl'>
            <li>
              <img className='h-96 rounded-lg' src={monstera} alt=''/>
                <p>Best Sellers</p>
            </li>
            <li>            
              <img className='h-96 rounded-lg' src={pothos} alt=''/>
              <p>Beginner Friendly</p>
            </li>
            <li>
              <img className='h-96 rounded-lg' src={collection} alt=''/>
              <p>Shop our curated collection</p>
            </li>
          </ul>

            <ul className='flex justify-around'>
              <li>
                <img className="h-52 w-52 rounded-full" src={pepperonia} alt='' />
                <h2> Planted with Love </h2>
                <p>Our plants cultivated by experts who share<br></br>
                the same passion for houseplants as you. We guarantee <br></br>
                your plant arrives happy and healthy or your money back!
                </p> 
              </li>
              <li>
              <img className="h-52 w-52 rounded-full" src={collection2} alt='' />
                <h2>Sustainable Approach</h2>
                <p>Our Eco-Friendly Packaging is 100% biodegradable!<br></br>
                Everything we ship can be broken down to be used <br></br>
                as fertilzer for your plants!
                </p> 
              </li>
              <li>
              <img className="h-52 w-52 rounded-full" src={pots} alt='' />
                <h2>Hand Crafted</h2>
                <p> Our unique planters are hand-crafted by local artists! <br></br>
                Each ceramic piece may have slight variations in size and color.
                <br></br>
                </p> 
              </li>
              {/* <li>
                <img className="h-52 w-52 rounded-full" src={yoga} alt='' />
                <h2>Breathe Better</h2> 
                <p>Plants release oxygen into the air <br></br>
                increasing air quality so you can move, <br></br>
                breathe, and sleep easier.
                </p>
              </li> */}
            </ul>
        </div>
      </div>

    </div>
  );
}

export default App;
