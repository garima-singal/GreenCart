
import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const MainBanner = () => {
  console.log('Assets:', assets); // ✅ must be inside the component

  return (
    <div className="relative px-4 md:px-12">
      <img
        src={assets.main_banner_bg}
        alt="banner"
        className="w-full hidden md:block"
      />
      <img
        src={assets.main_banner_bg_sm}
        alt="banner"
        className="w-full md:hidden"
      />

      <div className='absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24'>
        <h1 className='text-4xl md:text-6xl lg:text-6xl font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15'>
          Freshness you can trust , Savings you will love!
          </h1>
      

      <div className='flex items-center mt-8 font-large'>

        <Link to={"/products"} className='group flex items-center text-xl md:text-2xl gap-2 px-7 md:px-9 py-3 bg-[#4fbf8b] hover:bg-[#44ae7c]  transition rounded text-white cursor-pointer'>
        Shop Now 
        <img src={assets.white_arrow_icon} alt="Shop Now" className='md:hidden transition group-focus:translate-x-1'/>
        </Link>


         <Link to={"/products"} className='group hidden md:flex text-xl md:text-2xl  items-center gap-2 px-9 py-3 cursor-pointer'>
        Explore Deals
        <img src={assets.black_arrow_icon} alt="Shop Now" className='transition group-hover:translate-x-1' />
        </Link>

      </div>
    </div>

    </div>
  );
};

export default MainBanner;



