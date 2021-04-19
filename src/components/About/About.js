import React from "react";
import about from 'assets/about.jpg'

const About = () => {
  return (
    <div>
        <div className='block h-3/4 w-screen'>
          <div className='fixed h-3/4 max-h-full w-full'>
            <div className='bg-cover bg-fixed bg-no-repeat h-full' 
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${about})` }}>
            <h1 className='absolute top-1/2 left-1/2 inset-0 font-display text-white text-5xl m-auto z-10'>Who Are We?</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;