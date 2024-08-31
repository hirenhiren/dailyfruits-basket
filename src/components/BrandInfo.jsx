import React from 'react';
import BrandImage from '../assets/fruits-splash.png';

function BrandInfo() {
  return (
    <div className='bg-[#fff4eb] py-[50px] mt-[50px] overflow-hidden'>
      <div className='w-[90%] mx-auto'>
        <div className='flex flex-col sm:flex-row'>
          {/* Image Container */}
          <div className='w-full sm:w-1/2 flex justify-center items-center' data-aos="zoom-in-up">
            <img src={BrandImage} alt="banner" className='w-[90%] sm:w-[50%]' />
          </div>
          {/* Text Content Container */}
          <div className='w-1/2 flex flex-col justify-center w-full sm:w-[40%] text-center sm:text-left'>
            <h1 data-aos="fade-up" data-aos-delay="0" className='text-3xl sm:text-6xl md:text-4xl lg:text-6xl font-bold mb-4'>BRAND INFO</h1>
            <p data-aos="fade-up" data-aos-delay="0" className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!</p>
            <p data-aos="fade-up" data-aos-delay="0" className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!</p>
            <div data-aos="fade-up" data-aos-delay="0" className='flex justify-center sm:justify-start'>
              <button className='bg-[#de2c4d] text-white py-3 px-6 font-bold rounded-xl shadow-md shadow-[#de2c4d] hover:bg-[#c91f3b]'>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandInfo;
