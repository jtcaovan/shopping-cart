import React from "react";
import Nav from 'components/Nav/Header'
import Footer from 'components/Footer/Footer'
import AboutHero from './AboutHero'

const About = () => {
  return (
    <div className='h-screen'>
      <Nav />
      <AboutHero />
      <Footer />
    </div>
  );
};

export default About;