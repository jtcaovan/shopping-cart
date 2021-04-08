import React from 'react'
import { Link } from 'react-router-dom'
import pepperonia from '../assets/pepperonia.jpg'
import window from '../assets/window.jpg'
import succulents from '../assets/succulents.jpg'
import work from '../assets/work.jpg'
import pots from '../assets/pots.jpg'
import collection2 from '../assets/collection2.jpg'
import hero from '../assets/hero.jpg'
import snake2 from '../assets/snake2.jpg'
import collection from '../assets/collection.jpg'
import monstera from '../assets/monstera.jpg'

function App() {
  return (
    <div className='relative'>
      <div 
        className='bg-cover bg-fixed bg-no-repeat bg-opacity-20 h-screen' 
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

      <div id='contentContainer' className="relative min-h-0 h-auto">

        <div className="h-full absolute bottom-1/4 inset-x-0">
          <ul className='flex justify-around pt-20 bg-white text-2xl'>
            <li className='space-y-6 transform hover:scale-105 hover:text-red-500 duration-200'>
              <img className='h-96 shadow-xl hover:shadow-2xl' src={monstera} alt=''/>
                <p className='bg-opacity-30'>Best Sellers</p>
            </li>
            <li className='space-y-6 transform hover:scale-105 hover:text-red-500 duration-200'>            
              <img className='h-96 shadow-xl' src={snake2} alt=''/>
              <p>Beginner Friendly</p>
            </li>
            <li className='space-y-6 transform hover:scale-105 hover:text-red-500 duration-200'>
              <img className='h-96 shadow-xl' src={collection} alt=''/>
              <p>Shop our Curated Collection</p>
            </li>
            <li className='space-y-6 transform hover:scale-105 hover:text-red-500 duration-200'>
              <img className='h-96 shadow-xl' src={succulents} alt=''/>
              <p className=''>Shop Succulents</p>
            </li>
          </ul>


          <div className='mt-24'>
            <div className='text-center space-y-6'>
              <h1 className='text-5xl'>Buy Some Plants</h1>
              <h2 className='text-2xl'> Lorem ipsum dodaksd osdka </h2>
            </div>
            <div className='bg-gray-200 bg-opacity-40 py-8 my-24 grid grid-rows-2 grid-cols-2 gap-y-24'>
              <div className='m-auto space-y-8'>
                <h2 className='text-2xl'>Brighten Up Your Living Space</h2>
                <p class='text-lg'>Bring nature home with you. Incorpoating plants <br></br> 
                into your daily surroundings 
                will bring your space to life. </p>
              </div>

              <div className=''>
                <img className="" src={work} alt='' />
              </div>

              <div className='ml-4'>
                <img className="" src={window} alt='' />
              </div>

              <div className='m-auto space-y-8'>
                <h2 className='text-2xl'>Breathe Better. Live Better.</h2>
                <p className='text-lg'>Plants release oxygen increasing air quality <br></br>
                 so you can move, breathe, and sleep easier.</p>
              </div>

            </div>    
          </div>


          <h1 className='m-10 p-6 text-5xl text-center'>Why You'll Love Bloom</h1>
          <ul className='flex text-center justify-around'>
            <li>
              <img className="m-auto h-52 w-52 rounded-full" src={pepperonia} alt='' />
              <h2> Planted with Love </h2>
              <p>Our plants cultivated by experts who share<br></br>
              the same passion for houseplants as you. We guarantee <br></br>
              your plant arrives happy and healthy or your money back!
              </p> 
            </li>
            <li>
            <img className="m-auto h-52 w-52 rounded-full" src={collection2} alt='' />
              <h2>Sustainable Approach</h2>
              <p>Our Eco-Friendly Packaging is 100% biodegradable!<br></br>
              Everything we ship can be broken down to be used <br></br>
              as fertilizer for your plants!
              </p> 
            </li>
            <li>
            <img className="m-auto h-52 w-52 rounded-full" src={pots} alt='' />
              <h2>Hand Crafted</h2>
              <p> Materials are sourced locally and hand-crafted by artisans <br></br> 
                from our community. Each ceramic piece may have slight<br></br>
                  variations in size and color so you'll find <br></br>
                each planter unique to your own living space.
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
