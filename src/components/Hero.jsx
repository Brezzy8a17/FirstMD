import React from 'react';
import { backgroundImg } from '../utils';
import { Link } from 'react-router-dom';

//might use GSAP in the future for some elements not sure which rn 7.10.24
const Hero = () => {

  return (
    <div className='w-full relative'>
      <div className='h-5/6 w-full flex justify-center items-center flex-col'>
        <div className='relative text-left '>
          <h1 className = "hero-title">
            Connect with Doctors Anytime, Anywhere
          </h1>
          <h2 className='hero-subtitle'>
            Discover why hundreds of professionals trust First MD for their healthcare needs today !
          </h2>
          <div id = "cta" className='flex flex-col items-center opacity-1 translate-y-20'>
            <Link to="./SignUp" className='btn my-0  font-semibold text-xl' > Get Started</Link>
          </div>
          <img src={backgroundImg} alt = "background" className='my-4 py-8 px-5'/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
