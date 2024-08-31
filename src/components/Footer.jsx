import React from 'react';
import leafeImage from '../assets/leaf.svg';
import instaLogo from '../assets/social/instagram-svgrepo-com.svg';
import faceBookLogo from '../assets/social/facebook-svgrepo-com.svg';
import youtubeLogo from '../assets/social/youtube-168-svgrepo-com.svg';
import twitterLogo from '../assets/social/twitter-154-svgrepo-com.svg';

function Footer() {
  return (
    <div className='bg-[#fce9ed] py-[20px] overflow-hidden'>
        <div className='w-[90%] mx-auto'>
            <div className=''>
            <div className='py-10 flex justify-between items-center'>
          <div className='font-bold text-2xl flex'>
            <p>
              <span className='text-[#de2c4d] text-xl'>FRUIT</span> <span className='text-[#fb923c] text-xl'>STORE</span>
              <img src={leafeImage} alt="leaf"  className='inline ml-2 w-[30px]' />
            </p>
          </div>
          <ul className='flex space-x-4 items-center'>
                <li><img src={instaLogo} alt="" className='w-[20px] sm:w-[40px]'/></li>
                <li><img src={faceBookLogo} alt="" className='w-[20px] sm:w-[30px]'/></li>
                <li><img src={youtubeLogo} alt="" className='w-[20px] sm:w-[30px]'/></li>
                <li><img src={twitterLogo} alt="" className='w-[20px] sm:w-[30px]'/></li>
              </ul>
          </div>
            </div>
        </div>
    </div>
  )
}

export default Footer