import React from "react";
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import AboutHero from './AboutHero'
import aboutImg from 'assets/aboutImg.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const About = () => {
  return (
    <div className='h-screen'>
      <Header />
      <AboutHero />
      <div className=" text-gray-700 bg-white min-h-0 h-auto">
        <div className='w-9/12 text-center m-auto'>
            <h1 className='font-display text-4xl m-12'>Our Humble Beginnings</h1>
            <div className='font-body leading-loose text-center flex flex-col w-full 2xl:w-1/2 2xl:m-auto space-y-6'>
              <p>
              In 2017, Justin Caovan lived in a small, boring apartment in Long Beach, CA while attending university.
              After a couple of years of sharing a room, he finally had his own space and decided to spruce it up and make it his own. At a local swapmeet Justin picked up several houseplants
              including a spider plant, golden pothos, and a couple of succulents. The new plants instantly brightened up his dull room and was soon hooked.
              </p>
              
              <p>
              Over time, his plants outgrew his tiny room so he decided to propogate, pot, and gift them to his friends and family. Word got out Justin was giving away free plants so the
              local broke college students jumped at the opportunity to grab one for their living space. Met with an overwhelming demand, he employed the help of his friends to operate
              a mini nursery out of their apartment, thus creating Bloom.
              </p>
            </div>

            <h2 className='font-display text-4xl m-12'>Get in Contact!</h2>
            <div className='flex w-full 2xl:w-3/4 2xl:m-auto mb-20 font-body leading-loose space-x-12 justify-between'>
              <div className='w-7/12'>
                <img src={aboutImg} alt='Multiple plants'/>
              </div>
              <div className='w-5/12 flex-col space-y-5 m-auto text-left font-display'>
                <p >Questions, comments, concerns? Bloom is always looking for new opportunities, local artisans, and ways to spread our love of plants!</p>
                <p>Email us! <br></br>jtcaovan@gmail.com</p>
                <div className='flex space-x-6'>
                        <a href='https://github.com/jtcaovan' target='_blank rel="noopener noreferrer"'>
                            <FontAwesomeIcon className='text-2xl text-gray-700 hover:text-gray-900' icon={ faGithub } /> 
                        </a>
                        <a href='https://www.linkedin.com/in/justincaovan/' target='_blank rel="noopener noreferrer"'>
                            <FontAwesomeIcon className='text-2xl text-gray-700 hover:text-gray-900' icon={ faLinkedin }/> 
                        </a>
                </div>
              </div>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;